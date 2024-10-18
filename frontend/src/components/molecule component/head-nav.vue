<template>
	<section>
		<nav v-if="isProfilePage">
			<span class="logo">
				<a href="javascript:void(0)" @click.prevent="reloadPage">logo</a>
			</span>
			<span class="spacer"> </span>
			<span class="end">
				<span>mode</span>
				<span class="spacer"></span>
				<router-link to="/login">
					<span>logout</span>
				</router-link>
			</span>
		</nav>
		<nav v-else>
			<span class="logo">
				<a href="javascript:void(0)" @click.prevent="reloadPage">logo</a>
			</span>
			<span class="spacer"> </span>
			<span class="end">mode</span>
		</nav>
	</section>
</template>

<script>
export default {
	name: "header",
	data() {
		return {
			isProfilePage: false,
		};
	},
	created() {
		this.checkIfProfilePage();
	},
	watch: {
		'$route': 'checkIfProfilePage'
	},
	methods: {
		reloadPage() {
			window.location.reload();
			console.log(window.location);
		},
		checkIfProfilePage() {
			// Adjust this condition based on your route structure
			this.isProfilePage = this.$route.path.includes('/profile');
		},
	},
};
</script>

<style scoped>
section {
	width: 100%;
	height: auto;
}

nav {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	padding: 2%;
}

span {
	width: 100%;
	height: auto;
	/* outline: solid red; */
	color: var(--D-t-support);
}

.logo {
	flex: 1 0 20%;
}

.logo a {
	color: var(--D-t-support);
}

.spacer {
	flex: 3 0 60%;
}

.end {
	flex: 0 1 20%;
	display: flex;
	justify-content: end;
	color: var(--D-t-support);
}
</style>
