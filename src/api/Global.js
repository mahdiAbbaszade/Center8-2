import axios from "axios";
// import Cookies from "js-cookie";

const config = {
  // baseUrl: "http://94.139.165.200:8080/projects/moverii/admin/public/",
  baseUrl: 'https://tvto.onrender.com/api/v1/',
  // udata: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGU5OGU5OTEzODI2ZTkwYzFkMTZjZTBkZjczMTZkMzkwMWZjYjg3ODkyMDYxOTU3MTZkMThiNTQyYWIyZjNjNzhlYzk3ZWFiNTU1NjQ2ZTUiLCJpYXQiOjE2NjI1MzE3NDQuMDIyMDM3LCJuYmYiOjE2NjI1MzE3NDQuMDIyMDQ0LCJleHAiOjE2OTQwNjc3NDMuODgwOTg1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mue2kA8D0131xA1Ymdpp-6thafoInzopo8YGbtD1P3LE7SHIR4wcvUxBqv07leAupg8kQbrzNbR0QwL8NoAkPFB37NG5wx7-GBkEdDUbDYlasdI-kcvOsWtR5sdydJOrrJEYKLN6vn0Mfk1VCqKJrHGltbE1lDBKpC3Na3mtCmm9gSblorJOMrvq77-ZYJBsq5_Zvw-UXtxN9kL8wa5OCKj91dGt0qHu5puZq1jXewwvu3YIzm2a8viNy721CM3OK5DM2ZK0EUpei1OOy2HWzNvdDl9EwEhHvlvwgSCYw2PCcQmdTav6kAIHE3L_Nt-wZ63uao_E7_AFi5rDKmr1L4-02Zu2bVmwydfmDD4fXUHw6-dJtYv7fA1pjI_UBEsMa4tSEYwKncjPjqTAUioAkdIsIRa27N_H5j3g0LRUj6htfMACdWz4lpckHp0ZmGi5SF_lawkFhB6O64mMMoxhlGpq4wwG8gSaOnMDyfw1_xpl0Uw9r-OufZXNxwLtgioxw92s-v4dawxiP8UcPOi3YVsghOSDHOfPA0b-E9lteGDuENqoF4Vki2-H71glbK7dXHOglh-I8byG5vh4U_JQ9iWP87OVNo-DpkVgd-74HAct1R2TK69FNsIqhzoOZ0TySEzipW1ajWzYS-FAR_KjgxMGlRhOJ5liIuggL0p7P10',
  axiosHandle: () => {
    return axios.create({
      baseURL: config.baseUrl,
      // validateStatus: function (status) {
      //   if (status == 401) {
      //     localStorage.clear();
      //     Cookies.remove("token");
      //     Cookies.remove("token_type");
      //     Cookies.remove("expires_at");
      //     window.location.href = "/login";
      //   }
      //   return status >= 200 && status < 300;
      // },
      headers: {},
    });
  },
};
export default config;
