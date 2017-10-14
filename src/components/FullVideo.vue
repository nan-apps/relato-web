<template>
    <div :parallax="parallaxEnabled"
    					:fixed="fixed" 
    					:section-height="sectionHeight" >

  	  <iframe width="100%" 
  	  		  height="100%" 
  	  		  :src="getSrc" 
  	  		  frameborder="0" 
  	  		  allowfullscreen>  	  	
  	  </iframe>

    </div>
</template>

<script>

	import Parallax from 'vue-parallaxy'

	export default {
	  name: 'FullVideo',
	  components: {Parallax},
	  props: ['videoId', 'parallaxEnabled', 'sectionHeight', 'fixed'],
	  computed: {
	  	getSrc () {      
	      return 'http://www.youtube.com/embed/' + this.videoId + '?autoplay=0&showinfo=0&controls=0'
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
