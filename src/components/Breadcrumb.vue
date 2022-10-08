<template>
	<div class="breadcrumb">
		<RouterLink to="/">Home</RouterLink>
		<span>/</span>
		<span>Dashboard</span>
	</div>
</template>

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
