<template>
  <div>
    <lc-overlay :show="show" duration="400" hasAnimation="true" opacity="0.2" @LcOverlayBodyClicked="actionOverlayBodyClicked"></lc-overlay>
    <lc-loading :show="show" :type="type" :loading-text="text" :interval="interval"></lc-loading>
  </div>
</template>

<script type="text/ecmascript-6">
import LcLoading from 'lighting-ui/packages/lc-loading'
import LcOverlay from 'lighting-ui/packages/lc-overlay'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show_: this.show,
      type: 'default'
    }
  },
  watch: {
    show: {
      handler: function (newVal) {
        this.show_ = newVal
      }
    }
  },
  mounted() {

  },
  methods: {
    actionOverlayBodyClicked() {
      this.$emit('hide')
    }
  },
  components: {
    LcLoading,
    LcOverlay
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
