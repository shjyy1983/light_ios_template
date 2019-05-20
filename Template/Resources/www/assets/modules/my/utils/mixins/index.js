import App from 'light'
const Vue = App.Vue

Vue.mixin({
  methods: {
    isEmpty(o) {
      return o === null || o === undefined || o === ''
    }
  }
})