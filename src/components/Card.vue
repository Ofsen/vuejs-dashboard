<template>
	<div class="card-container" :style="{ background: bg, color: color }">
		<div class="title-container">
			<div class="title-group">
				<h1 class="title">
					<slot name="title" />
				</h1>
				<span class="pre">
					<slot name="pre" />
				</span>
			</div>
			<div v-if="!option" class="option">
				<i class="fas fa-ellipsis-vertical"></i>
			</div>
			<div v-if="option" class="option">
				<slot name="option" />
			</div>
		</div>
		<div class="subtitle">
			<slot name="subtitle" />
		</div>
		<div class="chart">
			<slot name="chart" />
		</div>
		<RouterLink v-if="link" class="link" to="link">
			<div class="fullcontent">
				<slot name="fullcontent" />
			</div>
		</RouterLink>
		<template v-else>
			<div class="fullcontent">
				<slot name="fullcontent" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		bg: { type: String },
		color: { type: String },
		option: { type: Boolean },
		link: { type: String },
	},
};
</script>

<style lang="scss" scoped>
.card-container {
	position: relative;
	background-color: white;
	box-shadow: 0 1px 2px 0 var(--lightgray);
	color: var(--dark);

	border-radius: 4px;
	padding: 1rem;

	.title-container {
		display: flex;
		justify-content: space-between;

		.title-group {
			display: flex;
			align-items: baseline;

			.pre {
				margin-left: 0.25rem;
				display: inline;
				font-size: 0.8rem;
			}
		}

		.option {
			cursor: pointer;
			padding: 1rem;
			margin-top: -1rem;
			margin-right: -1rem;
		}
	}

	.chart {
		display: grid;
		place-items: center;
		width: 100%;
	}

	.fullcontent {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		font-size: 3rem;
		width: 100%;
		display: grid;
		place-items: center;
		height: 100%;
	}

	.link {
		color: #fff;
		text-decoration: none;
	}
}
</style>
