<template>
    <div :parallax="parallaxEnabled"
    					:fixed="fixed" 
    				  :speed-factor="0.80" 
    				  :section-height="sectionHeight" >
  	  <img :src="getSrc"/>
  	</div>  
</template>

<script>

	import Parallax from 'vue-parallaxy'

	export default {
	  name: 'FullImage',
	  components: {Parallax},
	  props: ['name', 'parallaxEnabled', 'sectionHeight', 'fixed'],
	  computed: {
	    getSrc () {      
	      return require('../assets/images/' + this.name + '.png')
	    }
	  }
	}

</script>

<style lang="scss" scoped>
  img{
    width: 100%;
  }
</style>
