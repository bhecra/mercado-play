export interface IHttpAdapter<T> {
  get({ url, args }: { url: string; args?: unknown }): Promise<Response>
  post({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response>
  put({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response>
  patch({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response>
  delete({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response>
}
