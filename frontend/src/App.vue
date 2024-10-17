
<template>

  <div class="body">
    <Header class="header" />
  
    <router-view />
  
    
    <Footer class="footer" />

  </div>
    
</template>

<script>
    import Header from './components/molecule component/head-nav.vue'
    import Footer from './components/molecule component/footer.vue'
    
      export default {
        name: 'app',
    
        components: {
          Header,
          Footer,
        }
      }
    
</script>



<style>

.body{
  min-height: 100vh;
  position: relative;
  /* color: white ; */

}

.header,.footer{
  background-color: black;
  color: var(--LD-text,white);
  color: white;
  padding: 3%;
}

.footer{
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
}






</style>
