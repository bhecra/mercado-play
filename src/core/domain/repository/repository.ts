import { IFilter } from "../../../utils/index";

export abstract class Repository<T> {
  abstract get(id: string): Promise<T>

  abstract set(item: T | T[]): Promise<unknown>

  abstract update(item: T | T[]): Promise<unknown>

  abstract delete(id: string | string[] | T | T[]): Promise<unknown>

  abstract count(filter?: IFilter): Promise<number>

  abstract search(filter?: IFilter): Promise<T[]>

  abstract searchPaginator(filter?: IFilter): Promise<{ data: T[]; count: number }>

  abstract inputFormat(data: unknown): T;

  abstract outputFormat(data: unknown): unknown
}