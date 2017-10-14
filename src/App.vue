<template>
  <div id="app">
    
    <div class="container" >
      
      <full-image :name="'1'" 
                  :parallax-enabled="parallax.enabled" 
                  :fixed="parallax.fixed"
                  :section-height="parallax.sectionHeight" >
      </full-image>

      <full-video :video-id="'0TvCE5vD1k0'" 
                  :parallax-enabled="parallax.enabled" 
                  :fixed="parallax.fixed"
                  :section-height="parallax.sectionHeight" >                    
      </full-video>

      <full-image :name="'2'" 
                  :parallax-enabled="parallax.enabled"
                  :fixed="parallax.fixed"
                  :section-height="parallax.sectionHeight" ></full-image>

      <full-image :name="'3'" 
                  :parallax-enabled="parallax.enabled"
                  :fixed="parallax.fixed"
                  :section-height="parallax.sectionHeight" ></full-image>
      
    </div>

  </div>
</template>

<script>  
  
  import FullImage from './components/FullImage.vue';
  import FullVideo from './components/FullVideo.vue';

  export default {
    name: 'app',
    components:{ FullImage, FullVideo },
    data () {
      return {
        parallax: {
          enabled: false,
          fixed: false,
          sectionHeight: 100
        }
      }
    }
  }
</script>

<style lang="scss">

  @import "./assets/sass/style.scss";

</style>
