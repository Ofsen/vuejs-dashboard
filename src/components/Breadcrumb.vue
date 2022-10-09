<template>
	<div class="breadcrumb">
		<RouterLink to="/">Home</RouterLink>
		<p>{{ crumbs }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		crumbs: function () {
			let path = this.$route.fullPath.split("/").slice(1);
			let result = "";
			if (path[0].length > 0) {
				path.map((e) => {
					result += " / " + e.charAt(0).toUpperCase() + e.slice(1);
				});
			}
			return result;
		},
	},
};
</script>

<style lang="scss" scoped>
.breadcrumb {
	display: flex;
	flex-direction: row;
	align-items: center;

	background-color: white;
	border-bottom: 1px solid var(--lightgray);

	padding: 0.75rem 1rem;
	font-size: 0.8rem;

	& > * {
		padding-right: 0.5rem;
	}

	a {
		text-decoration: none;
		color: var(--dark);
		font-weight: bold;
	}
}
</style>
