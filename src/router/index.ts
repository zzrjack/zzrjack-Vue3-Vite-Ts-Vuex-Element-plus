import { toPath } from "lodash";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/userinfo",
        component: () => import("../views/Userinfo.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: "/404",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const isLogin: Boolean = localStorage.token ? true : false;
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});
export default router;
