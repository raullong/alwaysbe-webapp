<template lang="pug">
  .history
    .title 历史记录
    .list
      span(v-for="tag in historyTags") {{ tag.name }}
</template>

<script>
  export default {
    props: {
      historyTags: Array
    }
  }
</script>
