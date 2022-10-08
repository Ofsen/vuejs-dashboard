<template>
	<header>
		<RouterLink class="menu-link" to="#" @click="toggleSidebar()">
			<i class="fa-solid fa-bars"></i>
		</RouterLink>
		<RouterLink class="menu-link" to="/dashboard">Dashboard</RouterLink>
		<RouterLink class="menu-link" to="/Users">Users</RouterLink>
		<RouterLink class="menu-link" to="/Settings">Settings</RouterLink>

		<div class="grow-full" />

		<RouterLink class="menu-link" to="/dashboard">
			<i class="fa-regular fa-bell"></i>
		</RouterLink>
		<RouterLink class="menu-link" to="/dashboard">
			<i class="fa-solid fa-list"></i>
		</RouterLink>
		<RouterLink class="menu-link" to="/dashboard">
			<i class="fa-regular fa-envelope-open"></i>
		</RouterLink>

		<RouterLink class="menu-link" to="/profile">
			<img class="avatar" src="https://www.fillmurray.com/32/32" alt="avatar" srcset="" />
		</RouterLink>
	</header>
	<Breadcrumb />
</template>

<script>
import { toggleSidebar } from "./Sidebar/state";
import Breadcrumb from "./Breadcrumb.vue";
import { RouterLink } from "vue-router";

export default {
	components: { RouterLink, Breadcrumb },
	setup() {
		return { toggleSidebar };
	},
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	flex-direction: row;
	height: 50px;
	align-items: center;

	background-color: white;
	border-bottom: 1px solid var(--lightgray);

	padding: 1rem 1rem 1rem 0;

	& > * {
		padding: 0 0 0 1rem;
	}

	.menu-link {
		color: var(--darkgrey);
		text-decoration: none;
	}

	.avatar {
		border-radius: 50%;
		margin-left: 0.5rem;
	}
}
</style>
