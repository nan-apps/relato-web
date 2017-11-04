<template>
		<div :style="{height: clientHeight+'px', maxHeight: clientHeight+'px'}" >
	  		<p class="txt" >
	  			<slot>

	  			</slot>
	  		</p>
	  	</div>
</template>

<script>
export default {
  name: 'Txt',
  props: ['txt', 'clientHeight']
}
</script>

<style scoped lang="scss" >	
</style>
