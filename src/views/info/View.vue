<template lang="pug">
  div.info
    image-swiper(:images="images")
    app-content
    app-footer
</template>

<script>
  import ImageSwiper from './Image'
  import AppContent from './Content'
  import AppFooter from './Footer'

  export default {
    data () {
      return {
        images: [
          { src: 'http://lorempixel.com/400/250/city' },
          { src: 'http://lorempixel.com/400/250/food' },
          { src: 'http://lorempixel.com/400/250/animals' },
          { src: 'http://lorempixel.com/403/250/city' },
          { src: 'http://lorempixel.com/403/250/food' }
        ]
      }
    },
    components: { ImageSwiper, AppContent, AppFooter }
  }
</script>
