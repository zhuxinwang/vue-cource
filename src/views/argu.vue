<template>
    <div>
      {{name}}
    </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'zhudada'
    }
  }
}
</script>

<style scoped>

</style>
