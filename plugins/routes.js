export default defineNuxtPlugin(async (nuxtApp) => {
  return {
    provide: {
      routes: {
        home: "/",
        login: "/auth/login",
        register: "/auth/register",
        businesses: "/businesses",
        pricing: "/pricing",
      },
    },
  };
});
