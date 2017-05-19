<template lang="pug">
  div.search
    icon(type="search")
    input(placeholder="请输入名称/简拼/全拼", @focus="focusHandler", @input="inputHandler")
    icon(v-if="focus", type="close", @click.native="blurHandler")
</template>

<script>
  import Icon from 'components/icon/View'

  export default {
    data () {
      return {
        focus: false
      }
    },
    components: { Icon },
    methods: {
      focusHandler () {
        this.focus = true
        this.$emit('focus')
      },
      blurHandler () {
        this.$el.querySelector('input').value = ''
        this.focus = false
        this.$emit('blur')
      },
      inputHandler (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style lang="stylus">
  @import './style/search'
</style>
