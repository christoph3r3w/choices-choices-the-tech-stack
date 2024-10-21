import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home.vue";
import Login from "./components/login.vue";
import Profile from "./components/profile.vue";
import "./axios.js";

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: "/",redirect:'/login', name: Home, component: Home },
		{ path: "/login", name: Login, component: Login },
		{ path: "/profile", name: Profile, component: Profile },
	],
});

createApp(App)
	.use(router)

	.mount("#app");
