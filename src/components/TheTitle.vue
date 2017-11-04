<template>
  	<div><h1 class="the-title" ><slot>Titulo</slot></h1></div>
</template>

<script>
export default {
  name: 'TheTitle',
  props: ['title']
}
</script>

<style scoped lang="scss">
</style>
