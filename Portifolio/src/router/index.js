import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Portfólio", 
    component: () => import("@/views/PortfolioView.vue"),
    meta: { title: "Portfólio" }, 
  },
  {
    path: "/3c",
    name: "3c+",
    component: () => import("@/views/3CPlusView.vue"),
    meta: { title: "3C CRM" },
  },
  {
    path: "/materiais",
    name: "MC",
    component: () => import("@/views/M&CView.vue"),
    meta: { title: "Materiais de Construção" },
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
