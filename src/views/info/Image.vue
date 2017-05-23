<template lang="pug">
  div.swiper-container
    div.swiper-wrapper
      div.swiper-slide(v-for="image in images")
        img(:src="image.src")
    div.tip {{ tip }}
</template>

<script>
  import Swiper from 'swiper'
  import _ from 'lodash'

  export default {
    props: {
      images: Array
    },
    computed: {
      tip () {
        return '共' + _.size(this.images) + '张'
      }
    },
    mounted () {
      const instance = new Swiper(this.$el, {
        autoplay: 5000,
        updateOnImagesReady: true
      })
      this.$on('reset', slide => instance.slideTo(slide))
    }
  }
</script>

<style lang="stylus" scoped>
  @import './style/image'
</style>
