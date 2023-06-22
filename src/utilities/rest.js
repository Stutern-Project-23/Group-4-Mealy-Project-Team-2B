import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mealy.onrender.com/api/v1/user/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

const get = (path, options = {}) => api.get(path, options)

const post = (path, options = {}) =>  api.post(path, { body: options }).catch((error) => {
  throw new Error(error.response.data.message)
})

const put = (path, options = {}) => api.put(path, { body: options }).catch((error) => {
  throw new Error(error.response.data.message)
})

const patch = (path, options = {}) => api.patch(path, { body: options }).catch((error) => {
  throw new Error(error.response.data.message)
})

const del = (path, options = {}) => api.del(path, options).catch((error) => {
  throw new Error(error.response.data.message)
})

export default { get, post, put, patch, delete: del }
