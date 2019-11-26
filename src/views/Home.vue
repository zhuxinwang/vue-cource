<template>
  <div class="home">
    <div>{{food}}</div>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent页面</button>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
// import axios from 'axios'
export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 进入组件前，当时组件还未渲染，不可以用this，可参考next中的vm
  beforeRouteEnter (to, from, next) {
    console.log(from.name)
    next(vm => {
      console.log(vm)
    })
  },
  // 页面即将离开时触发，如有用户输入的信息未保存，准备离开该页面是触发
  beforeRouteLeave (to, from, next) {
    const leave = confirm('你确定要离开吗')
    if (leave) next()
    else next(false)
  },
  // 复用组件，url发生变化时触发
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  },
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        this.$router.push('/parent')
      }
    },
    getInfo () {
      // axios.post('/getUserInfo', { userId: 21 }).then(res => {
      //   console.log(res)
      // })
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res:', res)
      })
    }
  }
}
</script>
