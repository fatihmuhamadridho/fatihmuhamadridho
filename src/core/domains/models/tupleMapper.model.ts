type FieldSchema =
  | string
  | [string, FieldSchema[]] // nested object
  | [string, FieldSchema[], { isArray: true }] // array of object
  | [string, { isArrayOfString: true }] // array of string
  | [string, { isArrayOfNumber: true }]; // array of number

interface TupleMapperOptions {
  beforeWrite?: (val: any) => any;
  afterRead?: (val: any) => any;
}

export class TupleMapper<T extends Record<string, any>> {
  constructor(
    private schema: FieldSchema[],
    private options?: TupleMapperOptions,
  ) {}

  toTuple(obj: T): any[] {
    return this.schema.map((field) => {
      if (Array.isArray(field)) {
        const [key, nestedSchemaOrOpts, maybeOpts] = field as any;
        const value = (obj as any)?.[key];

        if (!value) return undefined;

        // case array of string
        if ((nestedSchemaOrOpts as any)?.isArrayOfString) {
          return Array.isArray(value)
            ? value.map((v) => (this.options?.beforeWrite && typeof v === 'string' ? this.options.beforeWrite(v) : v))
            : [];
        }

        // case array of number
        if ((nestedSchemaOrOpts as any)?.isArrayOfNumber) {
          return Array.isArray(value) ? value.map((v) => v) : [];
        }

        // case array of object
        if (maybeOpts?.isArray) {
          return Array.isArray(value)
            ? value.map((item: any) => new TupleMapper(nestedSchemaOrOpts, this.options).toTuple(item))
            : [];
        }

        // nested object
        return new TupleMapper(nestedSchemaOrOpts, this.options).toTuple(value);
      }

      const rawVal = (obj as any)?.[field];
      return this.options?.beforeWrite && typeof rawVal === 'string' ? this.options.beforeWrite(rawVal) : rawVal;
    });
  }

  toObject(tuple: any[]): T {
    const result: any = {};
    this.schema.forEach((field, index) => {
      if (Array.isArray(field)) {
        const [key, nestedSchemaOrOpts, maybeOpts] = field as any;
        const value = tuple?.[index];

        if (!value) {
          result[key] =
            (nestedSchemaOrOpts as any)?.isArrayOfString ||
            (nestedSchemaOrOpts as any)?.isArrayOfNumber ||
            maybeOpts?.isArray
              ? []
              : undefined;
          return;
        }

        // case array of string
        if ((nestedSchemaOrOpts as any)?.isArrayOfString) {
          result[key] = Array.isArray(value)
            ? value.map((v) => (this.options?.afterRead && typeof v === 'string' ? this.options.afterRead(v) : v))
            : [];
          return;
        }

        // case array of number
        if ((nestedSchemaOrOpts as any)?.isArrayOfNumber) {
          result[key] = Array.isArray(value) ? value.map((v) => v) : [];
          return;
        }

        // case array of object
        if (maybeOpts?.isArray) {
          result[key] = Array.isArray(value)
            ? value.map((item: any) => new TupleMapper(nestedSchemaOrOpts, this.options).toObject(item))
            : [];
        } else {
          result[key] = new TupleMapper(nestedSchemaOrOpts, this.options).toObject(value);
        }
      } else {
        const rawVal = tuple?.[index];
        result[field] = this.options?.afterRead && typeof rawVal === 'string' ? this.options.afterRead(rawVal) : rawVal;
      }
    });
    return result as T;
  }
}
