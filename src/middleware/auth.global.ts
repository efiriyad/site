export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/mobile" || to.path === "/mobile/") {
    return navigateTo("/mobile/home");
  }
});
