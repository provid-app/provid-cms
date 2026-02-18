export type ResType<T = any> = {
  error: boolean;
  message: string;
  data?: T;
};

export type ParamsType = {
  page: number;
  sortBy: string;
  sortOrder: "asc" | "desc" | "";
};

export type MetaDataType = {
  page: number;
  limit: number;
  offset: number;
  total: number;
  total_pages: number;
};

export type MetaResType<T> = {
  items: T;
  metadata: MetaDataType;
};
