import AboutComponent from "@/components/AboutComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name : 'About',
    component : AboutComponent
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
