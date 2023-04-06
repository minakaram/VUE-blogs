import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SingleBlog from "@/views/SingleBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },

    { path: "/blog/:id", component: SingleBlog },
  ],
});

createApp(App).use(router).mount("#app");
