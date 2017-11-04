<template>
  	<div :class="type" class="section" 
  		 :style="{height: clientHeight+'px', maxHeight: clientHeight+'px'}" >
  		<slot>Seccion</slot>
  	</div>
</template>

<script>
export default {
  name: 'SectionPage',
  props:['clientHeight', 'type']
}
</script>

<style scoped lang="scss">
</style>
