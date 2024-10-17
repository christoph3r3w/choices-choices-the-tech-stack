import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "./axios.js";

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: "/", name: Home, component: Home },
		{ path: "/login", name: Login, component: Login },
		{ path: "/profile", name: Profile, component: Profile },
	],
});

createApp(App)
	.use(router)

	.mount("#app");
