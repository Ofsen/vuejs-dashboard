<template>
	<div class="progressbar-container">
		<div class="percentage" :style="{ width: percentage + '%', 'background-color': color }"></div>
	</div>
</template>

<script>
export default {
	props: {
		percentage: { type: Number, required: true },
		color: { type: String },
	},
};
</script>

<style lang="scss" scoped>
.progressbar-container {
	width: 100%;
	position: relative;
	background: rgba($color: #000000, $alpha: 0.2);
	height: 4px;
	overflow: hidden;
	margin-top: 0.75rem;

	.percentage {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: yellow;
	}
}
</style>
