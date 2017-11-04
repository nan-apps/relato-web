<template>
	<div class="pic-container"  >
		<img class="pic" 
			 :src="getSrc"
			 :style="{height: clientHeight+'px', maxHeight: clientHeight+'px'}"/>
	</div>	
</template>

<script>


	export default {
	  name: 'Pic',
	  components: {},
	  props: [ 'sectionId', 'name', 'ext', 'clientHeight', 'activeSectionId'],
	  computed: {
	    getSrc () {      
	      return require('../assets/images/' + this.name + '.'+ this.ext)
	    }
	  }
	}

</script>

<style lang="scss" scoped>

</style>
