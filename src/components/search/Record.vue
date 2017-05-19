<template lang="pug">
  .record
    .title {{ title }}
    .list
      span(v-for="tag in tags") {{ tag.name }}
</template>

<script>
  export default {
    props: {
      title: '',
      tags: Array
    }
  }
</script>

<style lang="stylus">
  @import './style/record'
</style>

