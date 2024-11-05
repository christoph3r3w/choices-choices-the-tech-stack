<template>
		<Window 
		class="window window-profile"
		:title="'Hi, ' + user3.username "
		:context1=" 'id: ' + user3.id + ' - ' + 'see your package here'"
		id="top"
		>
			<div class="window-child" id="profile">
				<!-- main dashboard -->
				<Window 
				v-if="answers.length == 10"
				class="window-package profile-c info-config" 
				:title="''"
				:context1="''"
				>
					<ul v-if="2 > 3">
						<li><p>name: package name</p></li>
						<li><p>duration: this will last {{ user3.createdAt }}</p></li>
						<li><p>end: it expires on this date</p></li>
						<li><p>vehicle: what form of transport are you using</p></li>
						<li><p>budget: how much it cost or how much money you get </p></li>
						<li><p>info</p></li>
						<li><p>info</p></li>
						<li><p>info</p></li>
						
					</ul>
					<article  v-else>

						<div>
							<h2>person</h2>
							<ul>
								
								<li><p>name: package name</p></li>
								<li><p>duration: this will last {{ user3.createdAt }}</p></li>
								<li><p>end: it expires on this date</p></li>
							</ul>
						</div>

						<div>
							<h2>package</h2>
							<ul>
								<li><p>name: package name</p></li>
								<li><p>name: package name</p></li>
								<li><p>name: package name</p></li>
								<li><p>duration: this will last {{ user3.createdAt }}</p></li>
								<li><p>end: boom</p></li>
								<li><p>end: boom</p></li>
							</ul>
						</div>

						<div>
							<h2>extra</h2>
							<ul>
								<li><p>info</p></li>
								<li><p>info</p></li>
								<li><p>info</p></li>
							</ul>
						</div>
					</article>


					
					<router-link to="login">log-out</router-link>
					<router-link to="overview">info</router-link>
				</Window>

				<!-- no package dashboard -->
				<section v-else class="profile-c start">
					
					<article class="start-profile">
						<img src="../assets/pexels-dan-voican-2624103-17854203.jpg" alt="">

					</article>
					<article class="start-wizard">
						<div class="info-config"> 
							<article >
								<div>
									<h2>person</h2>
									<ul>
										
										<li><p>name: package name</p></li>
										<li><p>duration: this will last {{ user3.createdAt }}</p></li>
										<li><p>end: it expires on this date</p></li>
									</ul>
								</div>

								<div>
									<h2>package</h2>
									<ul>
										<li><p>name: package name</p></li>
										<li><p>name: package name</p></li>
										<li><p>name: package name</p></li>
										<li><p>duration: this will last {{ user3.createdAt }}</p></li>
										<li><p>end: boom</p></li>
										<li><p>end: boom</p></li>
									</ul>
								</div>

								<div>
									<h2>extra</h2>
									<ul>
										<li><p>info</p></li>
										<li><p>info</p></li>
										<li><p>info</p></li>
									</ul>
								</div>
							</article>
						</div>

						<!-- button box start options -->
						<div class="buttonBox">
							<h2> start here</h2>
							<Button 
							class="start-w-button"
							:text="'Package selection'" 
							:task="'#wizard'"
							></Button>

							<Button 
							class="start-w-button"
							:text="'Package info'" 
							:task="'#overview'"
							></Button>

							<!-- <Button 
							class="start-w-button logOut"
							:text="'Log-out'" 
							:task="'/Login'"
							></Button> -->

						</div>

						
					</article>
				</section>

				


				
				<!-- <router-link to="/wizard">wizard</router-link> -->
			</div>

			<div class="window" id="wizard">
				<Wizard class="window window-wizard" />
			</div>

			<div class="window" id="overview">
				<Overview class= "window window-overview" >
					
					<div v-if="roomData">
						<p>Room Data: {{ roomData }}</p>
					</div>

					<h1>Posts</h1>
					<ul>
						<li v-for="post in posts" :key="post.id">
							<h2>{{ post.title }}</h2>
							<p>Views: {{ post.views }}</p>
						</li>
						<p v-for="user in users2">{{ user }}</p>
						<p v-for="answer in answers">{{ answer  }}</p>
					</ul>

				</Overview>


			</div>

	
		</Window>
</template>

<script>
	import Window from '@/components/molecule component/window.vue'
	import Wizard from './wizard.vue';
	import Overview from './overview.vue';
	import Button from './atom components/button.vue';

	export default {
		name:'Profile',
		components:{
			Window,
			Wizard,
			Overview,
			Button
		}
	}
</script>


<style scoped>
	/* ////////////////////// */
	/* window and selection logic */
	/* ////////////////////// */

	.window-profile:has(.start) > :deep(h1),
	.window-profile:has(.start) > :deep(p) {
		translate: 0 40vh;
		padding-right: 71vw;
	}

	.window-profile:has(.window-package)  :is(#wizard,#overview){
		display: none;
	}

	.window:has(#wizard:is(:target)) :deep(h1),
	.window:has(#wizard:is(:target)) :deep(p),
	:deep(.window :is(h1,p)){
		translate: 0 0 !important;
		margin-left: 0vw !important;
	}

	.window-profile:first-of-type:has(#wizard:is(:target)) :is(.start-wizard,.info-config) {
		display: none;
	}

	.window-child{
		display: flex;
		flex-direction: column;
		gap: 3rem;
		height: 60vh;
		margin-block: 3%;
		
	}


	/* //////////////////// */
	/* all profile sections */
	/* //////////////////// */

	.profile-c{
		display: flex;
		height: 100%;
		width: fit-content;
		width: 100cqw;
		border-radius: clamp(0.5rem, 2vw, 1.8pc);
		align-items: center;
	}

	


	
	.profile-c .start-profile{
		min-width: 20cqw;
		height: 100%;
		overflow: hidden;

		/* test  */
		/* display: none; */
		
	}
	
	.profile-c .start-profile img{
		width: 15cqw ;
		aspect-ratio: 1;
		object-position: center;
		object-fit: cover;
		border-radius: 50%;
		display: none;
	}

	/* ////////////////////////////////////////////////////////// */
	/* right side section where you can choose to start the wizard */
	/* /////////////////////////////////////////////////////////// */

	.start-wizard{
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100cqw;
		height: 100%;
		background-color: var(--D-light-bk);
		border-radius: inherit;
		z-index: 0;
	}
	
	.start-wizard .info-config {
		height: 100%;
		width: 100%;
		border-radius: inherit;
		padding: 3%;
		pointer-events: none;
		user-select:none;



		& div{
			filter:opacity(0.3) blur(3px);
		}
	}



	.buttonBox{
		--w:45;
		--p: calc(calc(100 - var(--w))/2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3%;
		position: absolute;
		inset-inline-start: calc(var(--p) * 1%);
		inset-block: 0;
		width: calc(var(--w) * 1% );
		height: auto;
		border-radius: inherit;
		
	}

	.buttonBox h2{
		font-size: 2rem;
		text-align: center;
		&::first-letter{
			text-transform: capitalize;
		}
	}

	.start-w-button{
		width: 100%;
		height: auto;
		border-radius: inherit;
		display: grid;
		place-content: center;
		/* background-color: bisque; */
		/* font-size: 3rem; */
		padding: 3%;
		
	}


	/* /////////////// */
	/* wizard section */
	/* ////////////// */

	#wizard{
		padding-top: 11%;
		scroll-snap-align:start ;
		border-radius: clamp(0.5rem, 2.5vw, 50px);
		position: relative;
		margin-bottom: 3% ;
		/* translate: 0 -71vh; */
	}

	#wizard:deep(.WD){
		outline: 1px solid;
		padding-top: 5%;
	}

	#wizard:is(:target){
		margin-top: -70vh;
	}

	#overview{
		/* outline: solid red; */
		padding-top: calc(var(--hf-height) + 3rem);
	}
	


	/* ////////////////////////////// */
	/* styling when user is signed in  */
	/* /////////////////////////////// */

	.window-package,.info-config{
		border: 1px solid;
		align-items: initial;
		flex-direction: column;
		position: relative;
		/* width: 70cqw; */
		transition: .5s ease;
		background-color: var(--D-light-bk);
		overflow: hidden;


	}


	/* /////////////////////////////////// */
	/* user profile and package iformation */
	/* /////////////////////////////////// */


	:deep(.window-package){

		h1{
			font-size: clamp(1rem, -3.8rem + 8vw, 3cqi);

		}
	}

	.info-config ul{
		width: 100%;
		height: auto;
		margin-top: 3%;

		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 2%;
		/* overflow: hidden; */
		text-wrap-mode:wrap;
		text-wrap-style: balance;
		text-overflow: ellipsis;

		
	}

	.info-config li{
		height: fit-content;
		border-bottom: 1px solid;
		padding-top: 2%;
	}
	
	.info-config li p{
		height: fit-content;
		min-width: 1rem;
		width: fit-content;

		font-size: clamp(1rem, -3.8rem + 8vw, 1cqi);
		text-wrap:balance;
		text-wrap:auto;		
	}

	.info-config li p::before{
		content: '';
		color: var(--D-mid-bk);
		margin-right: 8px;
	}

	.info-config article{
		display: grid;
		height: 80cqh;
		grid-template-columns: repeat(auto-fit, minmax(calc(20cqw), 1fr));
		column-gap: 6%;
	}

	.info-config article h2{
		font-size: clamp(1rem, -3.8rem + 8vw, 1.5cqi);
		font-weight: 700;
		border-bottom: solid;
	}

	/* .info-config article div {} */


	.info-config article ul {
		flex-direction: column;
		flex-wrap: nowrap;
		margin-left: 12px;
		padding-top: 6%;
		height: 90%;
	}
	
	.info-config article li  {
		border-bottom: none;
		list-style:disc  ;

	}

	.info-config article div:nth-of-type(3):hover li:hover {
		border-left: 5px solid;
		list-style:none ;

	}

	.info-config article li p::before{
		content: '';
	}




	@media screen and (width < 1000px) {
		.profile-c{
			width: 100cqw;
			/* height: 100cqh; */
			flex-direction: column;
		}

		.profile-c .start-profile{
			display:none;
			background-color: yellow;
		}

		.window:first-of-type:has(.start) :deep(h1),
		.window:first-of-type:has(.start) :deep(p) {
		translate: 0 0;
		margin-left: 0;
		padding-right: unset;

		
	}

		#wizard{
			padding-top: 13% ;

		}
	}

	@media screen and (width < 750px) {

		.start-wizard{
			overflow-y: hidden;
		}

		.info-config{
			height: 75cqh ;
			overflow: unset;
			transition: .3s;
		}
		
		.info-config article{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(calc(20cqw), 1fr));
			grid-template-columns: 1fr;
			grid-auto-rows: auto;
			row-gap: 5cqw;
		}

		.info-config article div {
			max-height: auto;
		}

		.info-config article ul{
			max-height: 100%;
			padding-top: 0 ;
			margin-top: 1cqh;
		}
		
	}


</style>

