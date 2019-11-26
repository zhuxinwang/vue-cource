<template>
  <div>
    <p>i'm email</p>
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style scoped>

</style>
