<template>
  <div class="ss-nav-bar" :style="{height: navbarHeight}">
    <div :style="{height: (navbarHeight - 44 * 2)}"></div>
    <lc-minibar :title="title" background-color="#009688" :left-button="leftButtonIcon"></lc-minibar>

  </div>
</template>

<script type="text/ecmascript-6">
import App from 'light'
import LcMinibar from 'lighting-ui/packages/lc-minibar'

export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    leftButtonIcon: {
      type: String,
      default: 'assets/images/menu.png'
    }
  },
  data() {
    return {
      navbarHeight: this.$navbarHeight,
      platform: this.$platform
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  activated() {

  },
  methods: {
    minibarLeftButtonClick() {

    },
    minibarRightButtonClick() {

    }
  },
  components: {
    LcMinibar
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.ss-nav-bar {
  background-color: #009688;
}
</style>
