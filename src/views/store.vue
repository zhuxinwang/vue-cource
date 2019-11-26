<template>
  <div>
    <a-input v-model="stateValue"></a-input>
    <p>{{ stateValue }} -> lastLetter is {{ inputValueLastLetter }}  firstLetter -> {{firstLetter}}</p>
<!--    <p>{{inputValue}}</p>-->
    <a-show :content="inputValue" />
    <p>AppName：{{appName}}</p>
    <p>UserName：{{userName}}</p>

    <p>appNameWithVersion: {{ appNameWithVersion }}</p>

    <button @click="handelChangeAppName">修改appName</button>

    <p>appVersion: {{ appVersion }}</p>

    <button @click="changeUserName">修改userName</button>
  </div>
</template>

<script>
import AInput from '../components/Ainput'
import AShow from '../components/Ashow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      // appName: state => state.state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.state.appVersion
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
    ...mapGetters([
      'firstLetter',
      'appNameWithVersion'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    // ...mapState({
    //   appName: state => state.state.appName,
    //   userName: state => state.user.userName
    // })
    appName () {
      return this.$store.state.state.appName
    },

    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME', 'SET_STATE_VALUE']),
    handelChangeAppName () {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })

      // this.SET_APP_NAME('newAppName')

      // this.$store.commit({
      //   type: 'SET_APP_VERSION'
      // })
      this.updateAppName()
    },
    changeUserName () {
      this.SET_USER_NAME('newUserName')
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

<style scoped>

</style>
