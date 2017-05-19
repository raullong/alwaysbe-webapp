<template lang="pug">
  div
    app-search
    .list
      .col(v-for="i in [0, 1, 2]") {{ i }}
</template>

<script>
  import AppSearch from 'components/commons/Search'

  export default {
    components: { AppSearch }
  }
</script>
