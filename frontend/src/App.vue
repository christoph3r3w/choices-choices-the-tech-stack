  <template>

  <div class="body">
    <Header class="headr" />
  
    <router-view class="content" />
  
    
    <footer class="footr" />

  </div>
    
</template>

<script>
    import Header from '@/components/molecule component/head-nav.vue'
    import footr from '@/components/molecule component/footr.vue'
    
      export default {
        name: 'app',
    
        components: {
          Header,
          footr,
        }
      }
    
</script>



<style>

*{
  --hf-height:5vh;
  /* --body-color: color(display-p3 0.9494 0.9152 0.886);
  --body-color2:color(display-p3 0.9494 0.9152 0.886 / 0.9); */
}
.body{
  min-height: 100vh;
  position: relative;
  /* color: white ; */
  display: flex;
  flex-direction: column;
  background-color: var(--cream-bk);
}

.headr,.footr{
  color: var(--LD-text,white);
  padding-inline: 2.5%;
  flex:0 1 var(--hf-height);
}

/* .header{
  outline: .001rem solid;
} */

.footr{
  background-color: black;
  color: white;
  
  /* position: absolute; */
  bottom: 0;
  left:0;
  right:0;
}

.content{
  flex: 1 0 100%;
  margin-top: var(--hf-height) ;

}






</style>
