<template>		
    <youtube   :video-id="videoId"
  	  				 :player-width="'100%'"
  	  				 :player-height="clientHeight"
  	  				 @ready="ready">
	  </youtube>
</template>

<script>
	
	import Vue from 'vue'
	import isInViewport from '../utils.js'

	export default {
	  name: 'FullVideo',
	  data () {
	  	return{
	  		player: null
	  	}
	  },
	  components: {},
	  props: ['videoId', 'clientHeight', 'activeVideoId'],
	  mounted: () => {
	  	
	  },
	  methods:{
	  	ready (player) {
	      this.player = player
	    },
	  	play(){
  			console.log("PLAY!");
	  		if( this.player ){
	  			this.player.playVideo()
	  		}
	  	},
	  	pause(){
	  		console.log("PAUSE!");
	  		if( this.player )
	  			this.player.pauseVideo()
	  	}
	  },
	  watch: {
	    activeVideoId: function (activeVideoId) {
	      this.videoId == activeVideoId ? this.play() : this.pause()
	    }
	  }

	}

</script>

<style scoped>
  iframe{
  	width: 100%;
  	height: 1000px;
  }
</style>
