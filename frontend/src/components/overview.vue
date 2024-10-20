<template>

    <Window
	class="window-box"
	:title="'Package info '"
	:context1="'general information about the mobility pakages'"
	>

	 

	  <h1>overview</h1>
    

    
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
h1{
	color:red;
}

</style>
