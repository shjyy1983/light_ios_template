<template>
  <div class="s-list">
     <list class="list" @loadmore="getMoreData">
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing">
        <image class="arrow" :src="'assets/images/arrow.png'" v-if="refreshing === 'hide'" ref="arrow"></image>
        <lc-part-loading :show="refreshing === 'show'" :width="50" :height="50"></lc-part-loading>
      </refresh>

      <slot></slot>
    </list>
  </div>
</template>

<script type="text/ecmascript-6">
import Light from 'light'
import LcPartLoading from 'lighting-ui/packages/lc-part-loading'
const animation = Light.requireModule('animation')

export default {
  data() {
    return {
      refreshing: 'hide',
      refreshtext: 'Refreshing',
      refreshFlag: false
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onpullingdown(event) {
      this.refreshtext = '下拉刷新数据'
      let offset = Math.abs(Math.floor(Number(event.pullingDistance)))
      if (offset > 90) {
        this.refreshtext = '松开刷新数据'
        this.refreshFlag = true
      }
      if (offset === 90) {
        this.refreshtext = '正在刷新...'
      }

      let arrow = this.$refs.arrow
      let degree = 180.0 * offset / 100
      degree = degree > 180 ? 180 : degree
      animation.transition(arrow, {
        styles: {
          transform: `rotate(${degree}deg)`
        },
        duration: 0
      })
    },
    onrefresh() {
      if (this.refreshFlag) {
        this.refreshFlag = false
        this.refreshing = 'show'
        setTimeout(() => {
          this.refreshing = 'hide'
          this.$emit('refresh')
        }, 300)
      } else {
        this.refreshtext = '下拉刷新数据'
        this.refreshing = 'hide'
      }
    }
  },
  components: {
    LcPartLoading
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.refresh {
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 90px;
}
.arrow {
  width: 60px;
  height: 60px;
}
</style>
