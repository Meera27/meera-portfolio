import HomeComponent from "@/components/HomeComponent.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
