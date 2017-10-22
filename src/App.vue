<template>
  <div id="app">
    
    <div class="container" >
      
      <full-image :name="'2'">
      </full-image>
      
      <full-image :name="'1'">
      </full-image>

      <full-video :video-id="'0TvCE5vD1k0'" 
                  :client-height="clientHeight"
                  :active-video-id="activeVideoId"
                  v-observe-visibility="(isVisible, entry) => toggleVideo(isVisible, entry, '0TvCE5vD1k0')" >
      </full-video>


      <full-image :name="'3'">
      </full-image>
      
    </div>

  </div>
</template>

<script>  
  
  import Vuex from 'vuex';
  import FullImage from './components/FullImage.vue';
  import FullVideo from './components/FullVideo.vue';
  import {isInViewport} from './utils.js'

  export default {
    name: 'app',
    components:{ FullImage, FullVideo },
    data () {
      return {
      }
    },
    mounted: () => {
      this.$store.dispatch('SET_CLIENT_HEIGHT', document.documentElement.clientHeight);
    },
    computed: Object.assign(
      Vuex.mapState({
          activeVideoId: state => state.activeVideoId,
          clientHeight: state => state.clientHeight,
      })
    ),
    methods:{
      toggleVideo (isVisible, entry, videoId) {
        this.$store.dispatch('ACTIVE_VIDEO', {videoId: (isVisible ? videoId : null)});
      }
    }
  }
</script>

<style lang="scss">

  @import "./assets/sass/style.scss";

</style>
