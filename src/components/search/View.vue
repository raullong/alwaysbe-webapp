<template lang="pug">
  div.search
    .input
      icon(type="search")
      input(placeholder="请输入名称/简拼/全拼", @focus="focusHandler", @input="inputHandler")
      icon(v-if="focus", type="close", @click.native="blurHandler")
    record(:title="historyTitle", :tags="historyTags")
    record(:title="hotTitle", :tags="historyTags")

</template>

<script>
  import Icon from 'components/icon/View'
  import Record from './Record'

  export default {
    data () {
      return {
        focus: false,
        historyTitle: '历史搜索',
        hotTitle: '热门搜索',
        historyTags: [
          { name: '白菜' },
          { name: '野生蜂蜜' },
          { name: '番茄' },
          { name: '黄瓜' },
          { name: '土猪肉' },
          { name: '樱桃' },
          { name: '牛肝菌' }
        ]
      }
    },
    components: { Icon, Record },
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
