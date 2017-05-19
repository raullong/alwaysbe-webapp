<template lang="pug">
  div.entrance
    div.row(v-for="row in displayItems")
      template(v-for="item in row")
        router-link.col(v-if="item.to", tag="div", :style="colStyle", :to="item.to")
          div.icon(:style="{backgroundImage: item.url}")
          div.title {{ item.title }}
        a(v-else, :style="colStyle", :href="item.path")
          div.icon(:style="{background: item.color}")
            icon(:type="item.icon")
          div.title {{ item.title }}
</template>

<script>
  import _ from 'lodash'

  export default {
    data () {
      return {
        size: 3,
        items: [
          { icon: 'vegetables', to: '/vegetables', title: '蔬菜', url: 'url(/static/image/entrance/vegetables_white.svg)', order: 1, display: true },
          { icon: 'fruit', to: '/home', title: '水果', url: 'url(/static/image/entrance/fruit_white.svg)', order: 2, display: true },
          { icon: 'meat', to: '/home', title: '禽肉', url: 'url(/static/image/entrance/meat_white.svg)', order: 3, display: true },
          { icon: 'tea', to: '/home', title: '茶叶', url: 'url(/static/image/entrance/tea_white.svg)', order: 4, display: true },
          { icon: 'fungus', to: '/home', title: '菌类', url: 'url(/static/image/entrance/fungus_white.svg)', order: 5, display: true },
          { icon: 'nut', to: '/home', title: '坚果', url: 'url(/static/image/entrance/nut_white.svg)', order: 6, display: true }
        ]
      }
    },
    computed: {
      colStyle () {
        return { width: (2.88 / this.size) + 'rem' }
      },
      displayItems () {
        return _.chain(this.items).filter('display').sortBy('order').chunk(this.size).value()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './style/entrance'
</style>
