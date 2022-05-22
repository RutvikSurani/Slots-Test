import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Route } from "../utility/constant";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: Route.Home,
    component: () => import("../components/product/List.vue"),
    children: [
      {
        path: "Details/:productId",
        name: Route.ProductDetails,
        component: () => import("../components/product/ProducctDetails.vue"),
      },
    ],
  },
  {
    path: "/Cart",
    name: Route.Cart,
    component: () => import("../components/Cart.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
