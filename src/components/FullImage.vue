<template>
		<img :src="getSrc"/>
</template>

<script>


	export default {
	  name: 'FullImage',
	  components: {},
	  props: ['name'],
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
