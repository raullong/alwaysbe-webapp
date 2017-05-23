<template lang="pug">
  .card
    router-link(:to="'/info'")
      .image(:style="{backgroundImage: good.url}")
      .content
        .name    
          span [{{ good.provide }}] 
          span {{ good.name }}
        .descript {{ good.descript }}
        .price
          span ¥ {{ price }}
          span.unit  ／{{ good.unit }}
          span.pro(v-if="good.promotion") {{ good.promotion }}
</template>

<script>
  export default {
    props: {
      good: Object
    },
    computed: {
      price () {
        return (this.good.price / 100.0).toFixed(2)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './style/card'
</style>

