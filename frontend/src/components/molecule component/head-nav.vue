<template>
	<section>
		<nav v-if="isProfilePage">
			<span class="logo">
				<a href="javascript:void(0)" @click.prevent="reloadPage">
					<img src="@/assets/Deloitte.svg" >
				</a>
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
				<a href="javascript:void(0)" @click.prevent="reloadPage">
					<img src="@/assets/Deloitte.svg" >

				</a>
			</span>
			<span class="spacer"> </span>
			<span class="end">mode</span>
		</nav>
	</section>
</template>

<script>
import Logo from '@/assets/Deloitte.svg?component';
export default {
	name: "header",
	components:{
		Logo,
	},
	data() {
		return {
			isProfilePage: false,
		};
	},
	created() {
		this.checkIfProfilePage();
	},
	watch: {
		$route: "checkIfProfilePage",
	},
	methods: {
		reloadPage() {
			if (this.$route.path === '/profile') {
				window.location.reload();
			} else if (this.$route.path.startsWith('/profile#wizard')) {
				this.$router.push('/profile');
			} else {
				// For non-profile pages, reload as before
				window.location.reload();
			}
		},
		checkIfProfilePage() {
			this.isProfilePage = this.$route.path.includes("/profile");
		},
	},
};
</script>

<style scoped>
section {

	position: fixed;
 	 top: 0;
	width: 100%;
	height: var(--hf-height);
	backdrop-filter: blur(5px);
	isolation: isolate;
	z-index: 56;
	background-color: var(--body-color2) ;


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
	color: var(--D-t-support);
	
}

.logo {
	flex: 1 0 20%;
	position: relative;
}

.logo a {
	color: var(--D-t-support);
	position: relative;
	height: 100%;
}

.logo a img{
	width: 7rem;
	/* mix-blend-mode: difference; */

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
