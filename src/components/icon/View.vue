<template lang="pug">
  i(:class="classes", @click="clickHandler")
</template>

<script>
  export default {
    props: ['type'],
    computed: {
      classes () {
        return {
          fa: 1,
          [`fa-${this.type}`]: 1
        }
      }
    },
    methods: {
      clickHandler () {
        this.$emit('click')
      }
    }
  }
</script>
