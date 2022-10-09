<template>
	<div class="grid container">
		<div class="grid row-4">
			<Card bg="#321fdb" color="#fff">
				<template v-slot:title>26K</template>
				<template v-slot:pre>(-12.4% <i class="fas fa-arrow-down"></i>)</template>
				<template v-slot:subtitle>
					<p>Users</p>
				</template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart"></canvas>
				</template>
			</Card>
			<Card bg="#3399ff" color="#fff">
				<template v-slot:title>$6.200</template>
				<template v-slot:pre>(40.9% <i class="fas fa-arrow-up"></i>)</template>
				<template v-slot:subtitle>
					<p>Income</p>
				</template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart2"></canvas>
				</template>
			</Card>
			<Card bg="#f9b116" color="#fff">
				<template v-slot:title>2.49%</template>
				<template v-slot:pre>(84.7% <i class="fas fa-arrow-up"></i>)</template>
				<template v-slot:subtitle>
					<p>Conversion Rate</p>
				</template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart3"></canvas>
				</template>
			</Card>
			<Card bg="#e55352" color="#fff">
				<template v-slot:title>44K</template>
				<template v-slot:pre>(-23.6.4% <i class="fas fa-arrow-down"></i>)</template>
				<template v-slot:subtitle>
					<p>Sessions</p>
				</template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart4"></canvas>
				</template>
			</Card>
		</div>

		<div class="grid row-1">
			<Card option>
				<template v-slot:title>Traffic</template>
				<template v-slot:subtitle>
					<p>January - July 2021</p>
				</template>
				<template v-slot:option></template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart5"></canvas>
				</template>
			</Card>
		</div>

		<div class="grid row-3">
			<Card link="#" option bg="#3b5998" color="#fff">
				<template v-slot:fullcontent>
					<i class="fa-brands fa-facebook-f"></i>
				</template>
			</Card>
			<Card link="#" option bg="#01aced" color="#fff">
				<template v-slot:fullcontent>
					<i class="fa-brands fa-twitter"></i>
				</template>
			</Card>
			<Card link="#" option bg="#4875b4" color="#fff">
				<template v-slot:fullcontent>
					<i class="fa-brands fa-linkedin"></i>
				</template>
			</Card>
		</div>
	</div>
</template>

<script>
import Chart from "chart.js/auto";
import Card from "@/components/Card.vue";
export default {
	components: { Card },
	mounted() {
		const ctx = document.getElementById("myChart");
		const ctx2 = document.getElementById("myChart2");
		const ctx3 = document.getElementById("myChart3");
		const ctx4 = document.getElementById("myChart4");
		const ctx5 = document.getElementById("myChart5");

		const labels = ["1", "2", "3", "4", "5", "6", "7"];
		const data = {
			labels: labels,
			datasets: [
				{
					label: "My First Dataset",
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: "#ebedef",
					tension: 0.4,
					backgroundColor: "#ebedef",
					pointStyle: "circle",
					pointRadius: 4,
					pointHoverRadius: 6,
				},
			],
		};
		const config = {
			type: "line",
			data: data,
			options: {
				responsive: false,
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
					},
				},
				scales: {
					x: {
						display: false,
					},

					y: {
						display: false,
					},
				},
			},
		};
		const myChart = new Chart(ctx, config);
		const myChart2 = new Chart(ctx2, config);
		const myChart3 = new Chart(ctx3, config);
		const myChart4 = new Chart(ctx4, config);
		const myChart5 = new Chart(ctx5, config);
		myChart;
		myChart2;
		myChart3;
		myChart4;
		myChart5;
	},
};
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
}
.container {
	gap: 1rem;
	grid-template-rows: 1fr auto 1fr;
}
.row-4 {
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 1rem;

	@media (max-width: 1040px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 555px) {
		grid-template-columns: 1fr;
	}
}
.row-1 {
	grid-template-columns: 1fr;
	grid-template-rows: auto;

	@media (max-width: 566) {
		width: fit-content;
	}
}

.row-3 {
	gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr;

	@media (max-width: 776px) {
		grid-template-columns: 1fr;
	}
}

.w-full {
	width: 100%;
}
</style>
