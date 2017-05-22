<template lang="pug">
  li.card(:style="{backgroundImage: image.src}")
</template>

<script>
  export default {
    props: {
      image: Object
    }
  }
</script>
