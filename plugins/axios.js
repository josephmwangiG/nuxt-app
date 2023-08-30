import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
  const defaultUrl = "http://localhost:3000/api/";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
