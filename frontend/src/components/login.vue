<template>
	<div class="login">
		<section class="login-container">
			<aside class="login-content noise"></aside>

			<article>
				<h1 aria-label="login">Log-in</h1>
				<p> mobility package</p>
				<div class="space"></div>

				<form @submit.prevent="handleSubmit">
					<label for="Email">
						<input type="Email" name="Email" id="Email" v-model="email" placeholder="Email" required />
					</label>

					<label for="Password">
						<input type="Password" name="Password" id="Password" v-model="password" placeholder="Password"
							required />
					</label>

					<Button :text="'sign-in'" :task="'submit'" class="nextPage" />

					<!-- <button class="nextPage">sign-in</button> -->
				</form>
				<a href="https://apply.deloitte.com/careers/ResetPassword/?">forgot my Password</a>
			</article>
		</section>
	</div>
</template>

<script>
import Button from "./atom components/button.vue";
import axios from "axios";

export default {
	name: "Login",
	components: {
		Button,
	},
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async handleSubmit() {
			const response = await axios.post("/users", {
				email: this.email,
				password: this.password,
			});

			if (response.status == 201) {
				this.$router.push("/profile");
				console.log(response);
			} else {
				console.warn("not good");
			}
		},
	},
};
</script>

<style scoped>
.login {
	/* background-color: rgba(129, 129, 129, 0.238); */
	position: relative;
	margin: 0.3rem;
	margin-top: calc(var(--hf-height) + 3rem);

	padding: 1.5rem;
	padding-inline: 3rem;
	flex-direction: column;
	height: fit-content;
	overflow: hidden;
	border-radius: 50px;
	z-index: 1;
}

.login-container {
	position: relative;
	display: flex;
	width: 100%;
	height: fit-content;
	height: 77cqb;

	align-items: center;
	justify-content: center;
	border-radius: 2pc;
	perspective: 2000px;

	/* outline: solid; */

	&> :nth-child(1) {
		height: 100%;
		background-color: var(--body-color2)
		
	}

	&> :nth-child(2) {
		width: 35vw;
		width: clamp(10rem, 15rem + 25vw, 100rem);
		height: 100%;
	}
}

/* animation  */

.login-container:hover aside {
	/* transform: rotateY(20deg) translateX(-3%) scale(0.95); */
	/* transform: translateX(.5%) scale(0.99); */
	perspective: 3000px;
	box-shadow: 
		inset 0 0 10pc rgba(134, 134, 134, 0.222),
		inset 2px 0 2pc var(--D-mid-bk),
		0 1px 10px rgba(203, 203, 203, 0.249)
	;

	/* filter: brightness(1000%); */
	/* filter: blur(50px) contrast(110%); */
	/* filter: blur(50px) brightness(140%) contrast(110%); */
	/* filter: blur(5px) brightness(140%) contrast(110%); */
	/* filter: contrast(110%) brightness(120%) ; */
	/* filter: blur(5px) brightness(100%) contrast(100%); */
}

.login-container:hover .noise {
	transition: 3s cubic-bezier(0.34, -0.04, 0.17, 0.98);

	/* background test 1 */
	background: conic-gradient(from 5deg at 78% -39%,
		var(--D-base-bk) 35%,
		var(--D-mid-bk) 100%),
		url(https://grainy-gradients.vercel.app/noise.svg);
	
	/* background test 2 */
	background: conic-gradient(from 5deg at 78% -39%,
		var(--body-color) 35%,
		var(--body-color) 100%,
		url(https://grainy-gradients.vercel.app/noise.svg));
	filter: blur(5px) brightness(100%) contrast(-100%);


}


.login-content {
	position: relative;
	overflow: hidden;
	border-radius: clamp(10px, 50vw - 1rem, 2pc);
	transition: 3s cubic-bezier(0.34, -0.04, 0.17, 0.98);
	transform-origin: left;

	position: absolute;
	width: 100%;
}

.mid {
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
	padding: 6%;
	padding-bottom: 5vh;
	border-radius: 1pc;
	container-type: inline-size;
	container-name: login;
	text-wrap: stable;
	word-wrap: break-word;

	z-index: 3;
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
		margin-block: 6%;
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
		outline: 2px solid var(--D-mid-bk);
		outline-style: dashed;
		outline-offset: 10px;
		border-radius: 1pc;
	}

	& .nextPage {
		width: 90%;
		height: 7cqh;
		margin-bottom: 10%;
		color: white;
		border-radius: clamp(0.5rem, 2vw, 1.8pc);
		border: none;
		background-color: var(--black);
		display: grid;
		place-content: center;
		align-self: center;
		cursor: pointer;

		

		&:focus-visible,
		:focus-within {
			background-color: var(--D-mid-bk);
			outline-style: dashed;
			color: var(--D-black);
		}
	}

	
}

:deep(.button){
	background: black ;
}

.login-container article>a {
	color: var(--D-black);
	text-decoration: none;
	border-radius: 0.8pc;
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
	transition: 3s cubic-bezier(0.34, -0.04, 0.17, 0.98);
	/* background test 1 */
	background: conic-gradient(from 0deg at 80% -39%,
			var(--D-base-bk) 35%,
			var(--D-mid-bk) 100%),
		url(https://grainy-gradients.vercel.app/noise.svg);

		/* background test 2 */
	background: conic-gradient(from 0deg at 80% -39%,
			var(--body-color) 35%,
			var(--body-color) 100%),
		url(https://grainy-gradients.vercel.app/noise.svg);
}

@media screen and (width < 800px) {
	.login-container {
		position: relative;
	}

	.login-container> :nth-child(1) {
		max-width: revert;
		height: auto;
		position: absolute;
		inset: 0;
	}

	.login-container> :nth-child(2) {
		z-index: 3;
		width: 70%;
		height: 70%;
	}

	.noise {
		filter: blur(0px);

		background: conic-gradient(from 5deg at 78% -39%,
		var(--body-color) 35%,
		var(--body-color) 100%,
		url(https://grainy-gradients.vercel.app/noise.svg));
	filter: blur(5px) brightness(100%) contrast(-100%);	
	}

	.login-container article form .nextPage {
		/* margin-block: 3%; */
		height: 10cqb;
		width: 100%;

	}
}

@media screen and (width < 450px) {
	.login {
		position: relative;
		display: flex;
		flex-direction: column;
		min-width: fit-content;
		height: 100dvh;
	}

	.login-container {
		position: relative;
		border-radius: 0;
		height: 77cqb;
	}

	.login-container .login-content {
		display: none;
	}

	.login-container> :nth-child(2) {
		border-radius: inherit;
		height: fit-content;
		height: 100%;
		width: 100%;
		overflow: visible;
		padding-bottom: 3%;
	}

	.login-container article {
		container-type: normal;
	}

	.login-container article form {
		/* outline: solid; */

		& input:focus-visible {
			outline-offset: 1px;
		}

		& .nextPage {
			height: 10cqb;
		}
	}
}
</style>
