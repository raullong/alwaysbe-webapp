<template lang="pug">
  .content
    div.base
      .name
      span 野生蜂蜜
      .price
        span ¥ {{ price }}
    div.standard 
      p 规格
      span(:class="[item.code === cStandard.code ? 'active' : '']", v-for="item in standards", @click="chooseStandard(item)") {{ item.name }}
    div.num
      span 数量
      icon(type="minus" @click="minus()")
      input(v-model="num")
      icon(type="plus" @click="plus()")
</template>

<script>
  import Icon from 'components/icon/View'

  export default {
    data () {
      return {
        num: 1,
        standards: [
          { name: '500g 装', code: '001', price: 23000 },
          { name: '1000g 装', code: '002', price: 42000 },
          { name: '2000g 装，大瓶装更优惠。', code: '003', price: 80000 },
          { name: '500g 装', code: '004', price: 23000 },
          { name: '1000g 装', code: '005', price: 42000 },
          { name: '2000g 装', code: '006', price: 80000 }
        ],
        cStandard: { name: '500g装', code: '001', price: 23000 }
      }
    },
    components: { Icon },
    computed: {
      price () {
        return (this.cStandard.price / 100.0).toFixed(2)
      }
    },
    methods: {
      chooseStandard (item) {
        this.cStandard = { ...item }
      },
      minus () {
        if (this.num > 1) {
          this.num -= 1
        }
      },
      plus () {
        this.num += 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './style/content'
</style>

