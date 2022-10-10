import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Dashboard",
			component: () => import("../views/DashboardView.vue"),
		},
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "notFound",
			component: () => import("../views/NotFoundView.vue"),
		},
	],
});

export default router;
