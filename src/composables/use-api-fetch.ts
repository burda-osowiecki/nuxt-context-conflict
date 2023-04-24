import { ofetch, FetchOptions } from 'ofetch'

const HeaderKeys = {
  someKey: 'some-header-key'
}

export async function useApiFetch<DataT>(endpoint: string, options?: FetchOptions<'json'>): Promise<DataT> {
  const baseURL = `https://jsonplaceholder.typicode.com`

  const headers = {
    ...options?.headers,
    [HeaderKeys.someKey]:
      useCookie('some-cookie-key').value === 'true' ? '1' : undefined,
  }

  const data = await ofetch<DataT>(endpoint, {
    ...options,
    baseURL,
    headers,
  })

  return data
}
