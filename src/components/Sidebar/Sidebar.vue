<template>
	<aside class="sidebar" :style="{ width: sidebarWidth }">
		<RouterLink to="/" class="logo">
			<div v-if="collapsed">
				<i class="fa-solid fa-rocket"></i>
			</div>
			<div v-else>
				<p><i class="fa-solid fa-rocket"></i> CoreUI</p>
			</div>
		</RouterLink>

		<nav>
			<SidebarLink
				v-for="(item, index) in menuTree"
				:key="index"
				:label="item.label"
				:icon="item.icon"
				:to="item.to"
				:newTag="item.newTag"
				:title="item.title"
				:depth="0"
				:data="item.children"
			>
			</SidebarLink>
		</nav>

		<div class="grow-full" />

		<span class="toggle-menu collapsed-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
			<i class="fas fa-chevron-left" />
		</span>
	</aside>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SidebarLink from "./SidebarLink.vue";

export default {
	props: {},
	components: { SidebarLink },
	setup() {
		return { collapsed, toggleSidebar, sidebarWidth };
	},
	data() {
		return {
			menuTree: [
				{ label: "Dashboard", icon: "fas fa-gauge", to: "/dashboard", newTag: true },
				{ label: "theme", title: true },
				{ label: "Colors", icon: "fas fa-droplet", to: "/colors" },
				{ label: "Typography", icon: "fas fa-pen", to: "/typography" },
				{ label: "components", title: true },
				{
					label: "Base",
					icon: "fas fa-cube",
					children: [
						{ label: "Menus", icon: "fas fa-a", to: "/menus" },
						{ label: "Headers", icon: "fas fa-heading", to: "/headers" },
					],
				},
				{ label: "Charts", icon: "fas fa-chart-pie", to: "/charts" },
				{ label: "Forms", icon: "fas fa-table-list", to: "/Forms" },
				{ label: "Icons", icon: "fas fa-star", to: "/Icons" },
				{ label: "Notifications", icon: "fas fa-bell", to: "/Notifications" },
				{ label: "Widgets", icon: "fas fa-puzzle-piece", to: "/Widgets", newTag: true },
				{ label: "extras", title: true },
				{ label: "pages", icon: "fas fa-star", to: "/pages" },
				{ title: true },
				{ label: "Docs", icon: "fas fa-file-lines", to: "/Docs" },
				{ label: "Try", icon: "fas fa-layer-group", to: "/Try" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
aside.sidebar {
	color: var(--light);
	background-color: var(--sidebar-bg-color);

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	overflow: hidden;
	white-space: nowrap;
	position: relative;

	transition: 0.2s ease;

	.logo {
		text-align: center;
		padding: 1rem;

		color: var(--light);
		text-decoration: none;
		font-weight: bold;
	}

	.toggle-menu {
		cursor: pointer;

		display: flex;
		justify-content: flex-end;
		align-content: center;
		padding: 1rem;

		&.rotate-180 {
			justify-content: center;
		}
	}

	@media (max-width: 768px) {
		position: absolute;
		z-index: 99;
	}
}

nav {
	background-color: var(--sidebar-item-bg-light-color);

	max-height: calc(100vh - 100px);
	overflow-y: auto;
	overflow-x: hidden;

	.separator {
		content: " ";
		height: 1.5rem;
	}
}

.rotate-180 {
	transform: rotateY(-180deg);
}

details {
	cursor: pointer;
}
details summary > * {
	display: inline;
}
</style>
