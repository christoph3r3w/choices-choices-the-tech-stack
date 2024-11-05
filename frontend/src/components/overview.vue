<template>

    <Window
	class="window-box"
	:title="'Package info '"
	:context1="'general information about the mobility pakages'"
	>

	 <ul>
		<li>poiuy</li>
		<li>poiuy</li>
		<li>poiuy</li>
		<li>poiuy</li>
	 </ul>
	<slot></slot>

    </Window>

    
</template>

<script >
import Window from "@/components/molecule component/window.vue";
import Button from "@/components/atom components/button.vue";

export default {
	name:'Overview',
	components:{
		Window,
		Button,
	}


}

</script>

<style scoped>

.window-box{
	/* outline: solid; */
	background-color: var(--D-t-support);
	border-radius: clamp(0.5rem, 2.5vw, 50px);



}
h1{
	color:red;
}

</style>
