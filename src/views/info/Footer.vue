<template lang="pug">
  .footer
    router-link.icon(tag="div", to="/home")
      icon(type="home")
    router-link.icon(tag="div", to="/order")
      icon(type="heart-o")
    router-link.icon(tag="div", to="/order")
      icon(type="shopping-cart")
    span 加入购物车
</template>heart-o

<script>
  import Icon from 'components/icon/View'
  export default {
    components: { Icon }
  }
</script>

<style lang="stylus" scoped>
  @import './style/footer'
</style>
