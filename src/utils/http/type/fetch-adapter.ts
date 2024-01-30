import { IHttpAdapter } from '../interface/http-adapter.interface'

export class FetchAdapter<T> implements IHttpAdapter<T> {
  async get({ url, args }: { url: string; args?: unknown }): Promise<Response> {
    const headers = this.setUpHeaders(args)

    const init: RequestInit = { method: 'GET', headers }
    const request = new Request(url, init)
    const result = await this.httpFetch(request).catch(err => {
      throw err
    })

    return await result.json()
  }
  async post({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response> {
    const headers = this.setUpHeaders(args)
    const init: RequestInit = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }
  async put({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response> {
    const init: RequestInit = {
      method: 'PUT',
      headers: this.setUpHeaders(args),
      body: JSON.stringify(body),
    }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }

  async patch({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response> {
    const init: RequestInit = {
      method: 'PATCH',
      headers: this.setUpHeaders(args),
      body: JSON.stringify(body),
    }
    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }
  async delete({ url, body, args }: { url: string; body: T; args?: unknown }): Promise<Response> {
    const init: RequestInit = {
      method: 'DELETE',
      headers: this.setUpHeaders(args),
    }

    if (body) init['body'] = JSON.stringify(body)

    const request = new Request(url, init)
    const response = await this.httpFetch(request)
    return response
  }

  private setUpHeaders(args: unknown): Headers {
    return new Headers((args && typeof args === 'object' && 'headers' in args ? args.headers : {}) as HeadersInit)
  }

  private async httpFetch(request: Request): Promise<Response> {
    const response: Response = await fetch(request)
    if (response.ok) {
      return response
    } else {
      throw new Error(response.status.toString()) // Lanzar un error con el código de estado HTTP
    }
  }
}
