<template lang="pug">
  .hot
    .title 热门搜索
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
