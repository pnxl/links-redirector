import links from "../links.json";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.path.slice(1));

  console.log(links[to.path.slice(1)]);

  if (links[to.path.slice(1)] === undefined) {
    return navigateTo(links.base, { external: true });
  } else {
    return navigateTo(links[to.path.slice(1)], { external: true });
  }
});
