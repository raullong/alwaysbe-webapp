<template lang="pug">
  div
    .title
      h2 Slide right
    .images
      ul.cards(:class="{ active: isActive }", @click="myFilter()")
        card(:class="`card-${index}`", v-for="(item, index) in images", :image="item", key="index")
</template>

<script>
  import Card from './Card'

  export default {
    data () {
      return {
        isActive: false,
        images: [
          { src: 'url(http://lorempixel.com/400/250/city)' },
          { src: 'url(http://lorempixel.com/400/250/food)' },
          { src: 'url(http://lorempixel.com/400/250/animals)' },
          { src: 'url(http://lorempixel.com/403/250/city)' },
          { src: 'url(http://lorempixel.com/403/250/food)' },
          { src: 'url(http://lorempixel.com/403/250/animals)' },
          { src: 'url(http://lorempixel.com/402/250/city)' }
        ]
      }
    },
    components: { Card },
    methods: {
      myFilter () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './style/card'
</style>

