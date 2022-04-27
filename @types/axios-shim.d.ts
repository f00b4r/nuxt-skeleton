import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    key?: string,
  }
}
