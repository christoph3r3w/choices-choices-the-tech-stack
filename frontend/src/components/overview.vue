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
	border-radius: 50px ;
	background-color: var(--D-t-support);



}
h1{
	color:red;
}

</style>
