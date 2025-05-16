import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "../views/DetailView.vue";
import WriteView from "@/views/WriteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/board/write",
    name: "Write",
    component: WriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
