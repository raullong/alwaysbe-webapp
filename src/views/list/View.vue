<template lang="pug">
  .list
    app-card(v-for="good in goods" :good="good" key="good.name")
</template>

<script>
  import AppCard from './Card'

  export default {
    data () {
      return {
        goods: [{
          url: 'url(/static/image/a1.jpg)',
          name: '苹果',
          descript: '产自昭通，雪域高原孕育的大自然的结晶。',
          price: '2390',
          unit: '公斤',
          provide: '自营',
          promotion: '满50减5元'
        }, {
          url: 'url(/static/image/a2.jpg)',
          name: '西瓜',
          descript: '又大又甜的西瓜',
          price: '598',
          unit: '公斤',
          provide: '代售'
        }, {
          url: 'url(/static/image/a4.jpg)',
          name: '辣椒',
          descript: '朝天椒（非常辣）',
          price: '2300',
          unit: '公斤',
          provide: '自营'
        }]
      }
    },
    components: { AppCard }
  }
</script>
