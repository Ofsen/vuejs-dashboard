<script>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { collapsed } from "./state";
export default {
	name: "sidebar-link",
	data: () => ({
		showChildren: false,
	}),
	props: {
		label: { type: String, required: true },
		to: { type: String },
		icon: { type: String, required: true },
		newTag: { type: Boolean },
		title: { type: Boolean },
		depth: { type: Number, required: true },
		data: { type: Array },
	},
	components: { RouterLink },
	methods: {
		toggleChildren() {
			this.showChildren = !this.showChildren;
		},
	},
	setup(props) {
		const route = useRoute();
		const isActive = computed(() => route.path === props.to);
		return { isActive, collapsed };
	},
};
</script>

<template>
	<h1 v-if="title && !collapsed" class="title">{{ label }}</h1>
	<RouterLink v-if="!title && to" :to="to || ''" class="link" :class="{ active: isActive }">
		<i v-if="icon" class="icon" :class="icon" />
		<span v-if="!collapsed">
			{{ label }}
		</span>
		<div class="grow-full" />
		<div v-if="newTag" class="new">new</div>
	</RouterLink>
	<div v-if="data" class="link groupedLink" @click="toggleChildren()">
		<i v-if="icon" class="icon" :class="icon" />
		<span v-if="!collapsed">
			{{ label }}
		</span>
		<div class="grow-full" />
		<span :class="{ 'rotate-180': showChildren }" class="chevron" v-if="!collapsed">
			<i class="fas fa-chevron-down"></i>
		</span>
	</div>
	<div v-show="showChildren" class="sub-menu">
		<sidebar-link
			v-for="(item, index) in data"
			:key="index"
			:label="item.label"
			:icon="item.icon"
			:to="item.to"
			:newTag="item.newTag"
			:title="item.title"
			:depth="depth + 1"
			:data="item.children"
		/>
	</div>
</template>

<style scoped>
.link {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;
	padding: 1rem 0.75em;
	color: var(--light);
	text-decoration: none;
}
.link span {
	font-size: 0.8rem;
}
.link:hover {
	background-color: var(--sidebar-item-hover);
}
.link.active {
	background-color: var(--sidebar-item-active);
}
.link .icon {
	flex-shrink: 0;
	width: 25px;
	margin-right: 10px;
}

.new {
	background-color: var(--light-blue);
	border-radius: 4px;
	padding: 0.2rem;
	text-transform: uppercase;
	font-size: 0.5rem;
}

.title {
	margin: 2rem 1rem 0;
	text-transform: uppercase;
	font-size: 0.75rem;
}

.sub-menu {
	display: flex;
	flex-direction: column;
	transition: 0.2s ease;
	background-color: var(--sidebar-bg-color);
}

.chevron {
	transition: 0.2s ease;
}
.rotate-180 {
	transform: rotateZ(180deg);
}
</style>
