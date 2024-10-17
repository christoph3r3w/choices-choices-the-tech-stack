<template>
	<div class="login">

		<section class="login-container">

			<aside class="login-content noise">

			</aside>


			<article>
				<h1 aria-label="login">Log-in</h1>
				<p>some extra text</p>
				<div class="space"></div>

				<form @submit.prevent="handleSubmit">
					<label for="Email">
						<input type="Email" name="Email" id="Email" v-model="email" placeholder="Email" required>
					</label>

					<label for="Password">
						<input type="Password" name="Password" id="Password" v-model="password" placeholder="Password" required>
					</label>




					<!-- <Button
				text="next page"
				color=""
				colorLine="none"
				task="/profile"
				class="nextPage"
				
				/> -->

					<button>sign-in</button>

				</form>
				<a href="https://apply.deloitte.com/careers/ResetPassword/?">forgot my Password</a>
			</article>



		</section>



	</div>
</template>

<script>


export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		async handleSubmit() {

			const response = await axios.post('/users',{
				
				email: this.email,
				password: this.password

			})
			
			if(response.status == 201){
				this.$router.push('/profile')
				console.log(response);
			} else{
				console.warn('not good');
			}

		}
	}

}

</script>

<style scoped>
.login {
	background-color: rgba(129, 129, 129, 0.238);

	height: 100%;

	position: relative;
	margin: .3rem;
	padding: 1.5rem;
	padding-inline: 3rem;
	flex-direction: column;
	/* flex-grow: 1; */
	height: fit-content;
	overflow: hidden;
	border-radius: 50px;
	/* outline: solid var(--D-base-bk) ; */
	z-index: 1;

}


.login-container {
	position: relative;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	perspective: 3000px;

}

.login-container {
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	border-radius: 2pc 1pc 1pc 2pc;
	perspective: 2000px;



	&> :nth-child(1) {
		max-width: 37vw;
		height: 74cqb;
		background-color: blanchedalmond;
	}

	&> :nth-child(2) {
		width: 35vw;
		/* width: 100%; */
		height: 40vw;
		/* height: 70vw; */
		/* background-color:  red; */



	}



}

/* animation  */

.login-container:hover aside {
	transform: rotateY(20deg) translateX(-3%) scale(.95);
	perspective: 2000px;
	filter: brightness(1000%);
	filter: blur(50px) contrast(110%);

}


.login-content {
	position: relative;
	overflow: hidden;
	border-radius: clamp(10px, 50vw - 1rem, 2pc);
	transition: 5s cubic-bezier(0.34, -0.04, 0.17, 0.98);
	transform-origin: left;

	width: 100%;
}

.login-content .mid {
	width: 100%;
	height: 100%;

}

.login-container .login-info-highlight {
	position: absolute;
	inset: 10%;
	top: 40%;
	right: 20%;
	color: #ffffffc6;
	display: none;

}

.login-container>article {
	display: flex;
	flex-direction: column;
	padding: 8%;
	padding-bottom: 0;
	border-radius: 0pc 1pc 1pc 0pc;
	container-type: size;
	container-name: login;
	text-wrap: stable;
	word-wrap: break-word;



}

.login-container article h1 {
	font-size: 2.5rem;
	margin-bottom: 3%;

}

.login-container article .space {
	flex: 1;
}

.login-container article form {
	flex: 0 0 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80%;

	& label {
		margin-bottom: 6%;
	}

	& input {
		width: 100%;
		border: none;
		border-radius: 0;
		outline: none;
		border-bottom: solid 1px;
		background: transparent;
		font-size: 1.5rem;
	}

	& input:focus-visible {
		outline: solid var(--D-mid-bk);
		outline-style: dashed;
		outline-offset: 10px;
		border-radius: 1pc;

	}

	& .nextPage {
		width: 100%;
		height: 7cqh;
		margin-bottom: 10%;
		color: white;
		background-color: var(--black);
		border-radius: .8pc;
		border: none;
		display: grid;
		place-content: center;

		&:focus-visible,
		:focus-within {
			background-color: var(--D-mid-bk);
			outline-style: dashed;
			color: var(--D-black);
		}
	}
}

.login-container article>a {

	color: var(--D-black);
	text-decoration: none;
	border-radius: .8pc;
	width: fit-content;

	&::first-letter {
		text-transform: uppercase;
	}

	&:focus-visible,
	:active {
		outline: solid var(--D-mid-bk);
		color: var(--D-black);
		background-color: var(--D-base-bk);
	}


}

.isolate {
	isolation: isolate;
	position: relative;
}

.mid {

	width: 100%;
	height: 100%;

	background-image: url("pexels-dan-voican-2624103-17854203.jpg");
	background-repeat: no-repeat;
	background-size: cover;

	filter: contrast(0.7);
	mix-blend-mode: luminosity;
	isolation: isolate;

}

.noise {
	width: 100%;
	height: 100%;

	background: conic-gradient(from 0deg at 80% -39%, var(--D-base-bk) 35%, var(--D-mid-bk) 100%), url(https://grainy-gradients.vercel.app/noise.svg);
	filter: blur(15px);
}
</style>