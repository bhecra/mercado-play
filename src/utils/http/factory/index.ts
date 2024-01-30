import { IHttpAdapter } from '../interface/http-adapter.interface'
import { AxiosAdpater } from '../type/axios-adapter'
import { FetchAdapter } from '../type/fetch-adapter'

interface HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T>
}

class FetchFactory<T> implements HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T> {
    return new FetchAdapter()
  }
}
class AxiosFactory<T> implements HttpCreatorFactory<T> {
  createHttp(): IHttpAdapter<T> {
    return new AxiosAdpater<T>()
  }
}

enum HttpAdapterEnum {
  Axios,
  Fetch,
}

function createHttpAdapter<T>(params: HttpAdapterEnum): IHttpAdapter<T> {
  const factories = {
    [HttpAdapterEnum.Axios]: new AxiosFactory<T>(),
    [HttpAdapterEnum.Fetch]: new FetchFactory<T>(),
  }

  const FactoryClass: HttpCreatorFactory<T> = factories[params]

  return FactoryClass.createHttp()
}

export const httpAdapter = <T>(): IHttpAdapter<T> => createHttpAdapter<T>(HttpAdapterEnum.Fetch)
