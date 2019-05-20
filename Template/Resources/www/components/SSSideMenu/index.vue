<template>
  <div>
    <lc-popup width="600" :animation="{duration: 200}" :show="visible_" @LcPopupOverlayClicked="popupOverlayLeftClick" pos="left" ref="leftMenu" :overlay-cfg="overlayConfig" @swipe="onSwipe">
      <div class="profile">
        <image class="avatar" :src="avatarUrl"></image>
        <!-- <text class="title white margin-normal">{{loginUser.operatorName || '---'}}</text> -->
        <text class="title white margin-normal">{{operatorName || '---'}}</text>
      </div>
      <div class="list bg-gray-light">
        <lc-cell class="cell" label="关于我们" :label-style="labelStyle" has-arrow @LcCellClicked="navigateAboutPage"></lc-cell>
        <!-- <lc-cell class="cell" label="清除缓存" :label-style="labelStyle" @LcCellClicked="clearAllCache"></lc-cell> -->
        <lc-cell class="cell" label="退出当前账号" :label-style="labelStyle" @LcCellClicked="$emit('logout')"></lc-cell>
      </div>
      <div class="gesture-region" @swipe="onSwipe"></div>
    </lc-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import Light from 'light'
import LcCell from 'lighting-ui/packages/lc-cell'
import LcPopup from 'lighting-ui/packages/lc-popup'
import { navigateTo } from '@utils/bridge.js'
import { store, keys } from '@utils/store'
var modal = Light.requireModule('modal')

export default {
  props: ['visible'],
  data() {
    return {
      overlayConfig: {
        opacity: 0.2
      },
      avatarUrl: 'assets/images/avatar.png',
      operatorNo: '',
      operatorName: '',
      loginUser: {},
      labelStyle: {
        fontSize: 32,
        fontWeight: 600
      },
      aboutUrl: 'about/index',
      visible_: this.visible
    }
  },
  watch: {
    visible: {
      handler: function (newVal) {
        this.visible_ = newVal
      }
    }
  },
  mounted() {
    store.readData(keys.kOperatorName, 'O32').then((res) => {
      if (res.info.error_code === '0') {
        this.operatorName = res.data.result
      }
    })
  },
  methods: {
    popupOverlayLeftClick() {
      this.$emit('hide')
    },
    hidePopup() {
      this.$refs.leftMenu.hide()
    },
    clearAllCache() {
    },
    navigateAboutPage() {
      navigateTo('about/index')
      setTimeout(() => {
        this.hidePopup()
      }, 300)
    },
    onSwipe(e) {
      if (e.direction === 'left') {
        this.hidePopup()
      }
    }
  },
  components: {
    LcPopup,
    LcCell
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "~variable";
@import "~mainStyle";
.profile {
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  background-color: @colorBlue;
}
.avatar {
  width: 120px;
  height: 120px;
}
.title {
  top: 10px;
}
.cell {
  margin-top: 20px;
}
.gesture-region {
  flex: 1;
  background-color: @colorGrayLight;
}

</style>
