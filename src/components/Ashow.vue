<template>
  <div>
    <p>AShow:{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Ashow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
