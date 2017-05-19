<template lang="pug">
  div.search
    router-link.input(tag="div", :to="'/search'")
      icon(type="search")
      input(placeholder="请输入名称/简拼/全拼")
</template>

<script>
  import Icon from 'components/icon/View'

  export default {
    data () {
      return {
        linkPath: '/search'
      }
    },
    components: { Icon }
  }
</script>

<style lang="stylus">
  @import './style/search'
</style>
