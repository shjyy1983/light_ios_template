<template>
  <div class="ss-nav-bar" :style="barStyle">
    <div :style="{height: (navbarHeight - 44 * 2)}"></div>
    <div class="ss-nav-content">
      <div class="ss-nav-left-buttons">
        <div class="ss-nav-button" @click="onLeftButtonClick">
          <image class="ss-nav-icon" :src="leftButtonIcon" v-if="leftButtonIcon"></image>
        </div>
      </div>
      <div class="ss-nav-titles">
        <text class="ss-nav-title" :style="titleStyle">{{title}}</text>
      </div>
      <div class="ss-nav-right-buttons"></div>
    <div class="ss-nav-hair-line" :style="{backgronudColor: hairelineColor}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { navigateTo, navigateBack } from '@utils/bridge.js'

export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    type: {
      type: String,
      default: 'none'
    },
    theme: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: '#f6f6f6'
    },
    hairelineColor: {
      type: String,
      default: '#cccccc'
    }
  },
  data() {
    return {
      navbarHeight: this.$systemInfo.navBarHeight,
      platform: this.$systemInfo.platform
    }
  },
  computed: {
    leftButtonIcon() {
      if (this.type === 'back') {
        let icon = 'assets/images/back_black.png'
        if (this.theme === 'white') {
          icon = 'assets/images/back_black.png'
        }
        if (this.theme === 'blue') {
          icon = 'assets/images/back_white.png'
        }
        return icon
      }
      if (this.type === 'menu') {
        return 'assets/images/menu_black.png'
      }
      return ''
    },
    barStyle() {
      let styles = {
        height: this.navbarHeight
      }
      if (this.theme === 'white') {
        Object.assign(styles, { backgroundColor: '#f6f6f6' })
      }
      if (this.theme === 'blue') {
        Object.assign(styles, { backgroundColor: '#4277eb' })
      }
      return styles
    },
    titleStyle() {
      let styles = { color: '#333333' }
      if (this.theme === 'white') {
        styles = { color: '#333333' }
      }
      if (this.theme === 'blue') {
        styles = { color: '#ffffff' }
      }
      return styles
    }
  },
  created() {
  },
  mounted() {
  },
  activated() {

  },
  methods: {
    onLeftButtonClick() {
      if (this.type === 'back') {
        navigateBack()
      }
      if (this.type === 'menu') {
        this.$emit('leftButtonClick', this.type)
      }
    }
  },
  components: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "~variable";
@size88: 88px;

.ss-nav-content {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: @size88;
}
.ss-nav-left-buttons, .ss-nav-right-buttons {
  width: 176px;
  height: @size88;
}
.ss-nav-button {
  justify-content: center;
  align-items: center;
  width: @size88;
  height: @size88;
  background-color: transparent;
}
.ss-nav-icon {
  width: 60px;
  height: 60px;
}
.ss-nav-titles {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 398px;
  height: @size88;
}
.ss-nav-title, .ss-nav-subtitle {
  color: @colorBlack;
}
.ss-nav-title {
  height: @size88;
  line-height: @size88;
  font-size: 32px;
}
.ss-nav-hair-line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 1px;
  background-color: @colorGrayLightDarker;
}
</style>
