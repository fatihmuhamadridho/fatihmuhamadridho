/* eslint-disable @typescript-eslint/no-explicit-any */
type Status = {
  code: number | string;
  message: string;
};

export type Meta = {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
};

export type BaseResponse<D = any, M = Meta> = {
  status?: Status;
  data: D | null;
  meta?: M | null;
};

export type BaseUseCase<P = any, R = any> = {
  execute(params?: P): Promise<R>;
};
