<template lang="pug">
  app-search(@focus="searchFocus = true", @blur="searchFocus = false", @input="search")
</template>

<script>
  import AppSearch from 'components/search/View'

  export default {
    data () {
      return {
        searchFocus: false,
        searchResult: [],
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
