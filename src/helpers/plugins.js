import http from './http'
import { router } from '../../router'

export default {
  install: Vue => {
    Vue.prototype.$http = http;
    Vue.$http = Vue.prototype.$http;

    Vue.prototype.$http.interceptors.response.use(
      response => {
        return {
          ...response,
          statusCode: response.status,
          statusText: response.statusText
        };
      },
      error => {
        if(error.response.data.message === 'Invalid token: access token has expired.' || error.response.data.errorType === 'invalid_token') {
          router.push({ name: "login", params: { message: error.response.data.message }})
      }
      return Promise.reject({
        ...error,
        statusCode: error.response.status,
        statusText: error.response.statusText
      }); //always reject error
    }
  )}
}