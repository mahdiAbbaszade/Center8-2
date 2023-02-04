import config from '../Global'
export default {
  patch: (route , data) => {
    return config.axiosHandle().patch(route , data)
  },
  get: (route , data) => {
    const qs = Object.keys(data)
        .map(
            (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    return config.axiosHandle().get(`${route}?${data}`)
  },
  post: (route , data) => {
    console.log(data)
    return config.axiosHandle().post(route, data)
  },

}
