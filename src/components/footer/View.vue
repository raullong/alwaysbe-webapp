<template lang="pug">
  .footer
    router-link.icon(tag="div", to="/home")
      icon(type="home")
    router-link.icon(tag="div", to="/order")
      icon(type="shopping-cart")
    router-link.icon(tag="div", to="/helper")
      icon(type="user")
</template>

<script>
  import Icon from 'components/icon/View'
  export default {
    components: { Icon }
  }
</script>

<style lang="stylus" scoped>
  @import './style/footer'
</style>
