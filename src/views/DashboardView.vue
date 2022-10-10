<template>
	<div class="container">
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
					<canvas sc class="w-full" id="myChart4"></canvas>
				</template>
			</Card>
		</div>

		<div class="grid row-1">
			<Card option description>
				<template v-slot:title>Traffic</template>
				<template v-slot:subtitle>
					<p>January - July 2021</p>
				</template>
				<template v-slot:option></template>
				<template v-slot:chart>
					<canvas class="w-full" id="myChart5"></canvas>
				</template>
				<template v-slot:description>
					<div class="info">
						<p>Visits</p>
						<h3>29.703 Users (40%)</h3>
						<Progressbar percentage="40" color="#36ba63" />
					</div>
					<div class="info">
						<p>Unique</p>
						<h3>24.093 Users (20%)</h3>
						<Progressbar percentage="20" color="#399bfe" />
					</div>
					<div class="info">
						<p>Pageviews</p>
						<h3>78.706 Views (60%)</h3>
						<Progressbar percentage="60" color="#f8b21d" />
					</div>
					<div class="info">
						<p>New Users</p>
						<h3>22.123 Users (80%)</h3>
						<Progressbar percentage="80" color="#e55958" />
					</div>
					<div class="info">
						<p>Bounce Rate</p>
						<h3>40.15%</h3>
						<Progressbar percentage="40.15" color="#3927db" />
					</div>
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
import Progressbar from "@/components/Progressbar.vue";
export default {
	components: { Card, Progressbar },
	mounted() {
		// Setup des charts on component mounted
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
				maintainAspectRatio: false,
				resizeDelay: 500,
				responsive: true,
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
		myChart;
		myChart2;
		myChart3;
		myChart4;

		const labelsBIG = ["January", "February", "March", "April", "May", "June", "July"];
		const dataBIG = {
			labels: labelsBIG,
			datasets: [
				{
					label: "BIG CHART",
					data: [160, 65, 120, 170, 198, 105, 190],
					borderColor: "#80d39b",
					tension: 0.5,
					fill: false,
					pointRadius: 1,
				},
				{
					label: "BIG CHART",
					data: [190, 54, 160, 140, 70, 120, 130],
					fill: true,
					borderColor: "#75b8fd",
					tension: 0.5,
					backgroundColor: "#e8e9ea",
					pointRadius: 1,
				},
			],
		};
		const configBIG = {
			type: "line",
			data: dataBIG,
			options: {
				maintainAspectRatio: false,
				resizeDelay: 500,
				responsive: true,
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
					},
				},
				scales: {
					y: {
						ticks: {
							padding: 20,
						},
					},
				},
			},
		};
		const myChart5 = new Chart(ctx5, configBIG);
		myChart5;
	},
};
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
}
.container {
	display: grid;
	gap: 1em;
	grid-template-rows: min-content 1fr min-content;
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

.info {
	flex-basis: 20%;

	@media (max-width: 1024px) {
		flex-basis: 40%;
	}
}
</style>
