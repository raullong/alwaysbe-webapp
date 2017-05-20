<template lang="pug">
  div
    app-search
    app-list
</template>

<script>
  import AppSearch from 'components/commons/Search'
  import AppList from 'views/list/View'

  export default {
    components: { AppSearch, AppList }
  }
</script>
