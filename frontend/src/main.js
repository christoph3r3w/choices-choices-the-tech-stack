import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home.vue";
import Login from "./components/login.vue";
import Profile from "./components/profile.vue";
import Wizard from "./components/wizard.vue";
import "./axios.js";

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: "/", name: Home, component: Home },
		{ path: "/login", name: Login, component: Login },
		{ path: "/profile", name: Profile, component: Profile },
		{ path: "/wizard", name:Wizard,component:Wizard},
	],
});

createApp(App)
	.use(router)

	.mount("#app");
