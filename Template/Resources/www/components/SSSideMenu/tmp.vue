<template>
  <div class="side-menu">
    <div class="wrapper" v-if="contentVisible">
      <SSButton title="点击隐藏" @click="actionHide"></SSButton>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import App from 'light'
import SSButton from '@components/SSButton'
const animation = App.requireModule('animation')

export default {
  props: {
    visible: {
      type: Boolean
    }
  },
  watch: {
    visible: {
      handler: function(value) {
        this.visibleMenu(value)
      },
      immediate: true
    }
  },
  data() {
    return {
      contentVisible: this.visible
    }
  },
  mounted() {

  },
  methods: {
    visibleMenu(visible) {
      let transform = 'translate(0px, 0px)'
      if (visible) {
        this.contentVisible = visible
        transform = 'translate(750px, 0px)'
      }
      animation.transition(this.$el, {
        styles: {
          // width: width,
          transform: transform,
          transformOrigin: 'center center'
        },
        duration: 400, // ms
        timingFunction: 'ease',
        delay: 0 // ms
      }, () => {
        this.contentVisible = visible
      })
    },
    actionHide() {
      this.$emit('hide')
    }
  },
  components: {
    SSButton
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.side-menu {
  position: absolute;
  overflow: hidden;
  left: -750px;
  top: 0;
  bottom: 0;
  width: 750px;
  background-color: transparent;
}
.wrapper {
  flex: 1;
  width: 400px;
  background-color: green;
}
</style>
