import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Portfólio", 
    component: () => import("@/views/Portfolio.vue"),
    meta: { title: "Portfólio" }, 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Vue"; 
  next();
});

export default router;
