<template lang="pug">
  div
    banner
    entrance
    v-footer
</template>

<script>
  import Banner from 'components/banner/View'
  import Entrance from './Entrance'
  import VFooter from 'components/footer/View'

  export default {
    components: { Banner, Entrance, VFooter }
  }
</script>
