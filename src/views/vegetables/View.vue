<template lang="pug">
  app-search(placeholder="蔬菜名", :value="name", :options="options")
</template>

<script>
  import AppSearch from 'components/search/View'

  export default {
    data () {
      return {
        name: '',
        placeholder: '蔬菜名',
        options: [{
          value: '001',
          label: '白菜'
        }, {
          value: '002',
          label: '藕'
        }]
      }
    },
    components: { AppSearch }
  }
</script>
