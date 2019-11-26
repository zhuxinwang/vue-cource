<template>
  <div>
    <p>i'm tel</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mg => {
      this.message = mg
    })
  }
}
</script>

<style scoped>

</style>
