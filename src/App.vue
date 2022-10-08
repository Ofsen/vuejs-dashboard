<script>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
	components: { Sidebar, RouterView },
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
		<RouterView />
	</main>
	<!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

	<!-- <RouterView /> -->
</template>

<style lang="scss">
:root {
	--primary: #2359b1;
	--primary-alt: #153f84;
	--light: #e5e8e9;
	--dark: #202022;
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
		padding: 2rem;
		max-height: 100vh;
		overflow-y: auto;

		@media (max-width: 768px) {
			padding-left: 5rem;
		}
	}
}

.grow-full {
	flex-grow: 1;
}

</style>
