<template>
  <div class="nav-bar">
    <div class="left" @click="goBack">
      <div class="left-wrap" v-if="!root">
        <i class="iconfont icon-back"></i>
        <div>返回</div>
      </div>
    </div>
    <div class="nav-title">{{title}}</div>
    <div class="right">
      <div class=right-wrap></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    root: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  activated() {

  },
  methods: {
    goBack() {
      window.history.back()
    }
  },
  components: {

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "~comm_variable";

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.28rem;
  color: white;
  background-color: @colorBlueDark;
  .left {
    width: 2.4rem;
    .left-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .icon-back {
        font-size: .44rem;
      }
    }
  }
  .nav-title {
    text-align: center;
    font-size: .28rem;
  }
  .right {
    width: 2.4rem;
    .right-wrap {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
