type FieldSchema = string | [string, FieldSchema[]] | [string, FieldSchema[], { isArray: true }];

export class TupleMapper<T extends Record<string, any>> {
  constructor(private schema: FieldSchema[]) {}

  toTuple(obj: T): any[] {
    return this.schema.map((field) => {
      if (Array.isArray(field)) {
        const [key, nestedSchema, opts] = field;
        const value = (obj as any)?.[key];

        if (!value) return undefined;

        if (opts?.isArray) {
          return Array.isArray(value) ? value.map((item: any) => new TupleMapper(nestedSchema).toTuple(item)) : [];
        }
        return new TupleMapper(nestedSchema).toTuple(value);
      }
      return (obj as any)?.[field] ?? undefined;
    });
  }

  toObject(tuple: any[]): T {
    const result: any = {};
    this.schema.forEach((field, index) => {
      if (Array.isArray(field)) {
        const [key, nestedSchema, opts] = field;
        const value = tuple?.[index];

        if (!value) {
          result[key] = opts?.isArray ? [] : undefined;
          return;
        }

        if (opts?.isArray) {
          result[key] = Array.isArray(value)
            ? value.map((item: any) => new TupleMapper(nestedSchema).toObject(item))
            : [];
        } else {
          result[key] = new TupleMapper(nestedSchema).toObject(value);
        }
      } else {
        result[field] = tuple?.[index] ?? undefined;
      }
    });
    return result as T;
  }
}
