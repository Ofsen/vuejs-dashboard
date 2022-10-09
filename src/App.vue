<script>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Header from "@/components/Header.vue";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
	components: { Sidebar, Header, RouterView },
	setup() {
		sidebarWidth;
	},
};
</script>

<template>
	<Sidebar />
	<main
		style="
			 {
				margin-left: sidebarWidth;
			}
		"
	>
		<Header />
		<section>
			<RouterView />
		</section>
	</main>
</template>

<style lang="scss">
:root {
	--primary: #2359b1;
	--primary-alt: #153f84;
	--light: #e5e8e9;
	--dark: #202022;
	--lightgray: rgb(154, 161, 182);
	--gray: rgb(108, 116, 139);
	--darkgrey: rgb(66, 72, 92);
	--light-blue: #3baad9;

	--sidebar-bg-color: #303c54;
	--sidebar-item-bg-color: #3c4b64;
	--sidebar-item-bg-light-color: #4e5e78;
	--sidebar-item-hover: #5e7191;
	--sidebar-item-active: #43516c;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Roboto", "Open sans", sans-serif;
}

* {
	scrollbar-width: thin;
	scrollbar-color: var(--sidebar-item-hover) rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar {
	width: 6px;
}

*::-webkit-scrollbar-track {
	background: rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-thumb {
	background-color: var(--sidebar-item-hover);
	border-radius: 20px;
}

body {
	background: var(--light);
	color: var(--dark);
}

#app {
	display: flex;

	main {
		flex: 1 1 0;

		section {
			padding: 1rem;
			max-height: calc(100vh - 50px - 40px);
			overflow-y: auto;
		}

		@media (max-width: 768px) {
			padding-left: 3rem;
		}
	}
}

.grow-full {
	flex-grow: 1;
}
</style>
