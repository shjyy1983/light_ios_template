<template>
  <div class="ss-input" :style="{width: width, height: height}">
    <input :type="type" :placeholder="placeholder" :style="inputStyle" @focus="onFocus" @blur="onBlur" v-model="value" ref="input" />
    <div :style="borderBottomStyle"></div>
    <div class="clear" v-if="isEditing && value.length > 0">
      <image src="assets/images/clear.png" style="width: 40px; height: 40px;" @click="clearInput"></image>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 80
    },
    fontSize: {
      type: Number,
      default: 32
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputStyle: {
        width: this.width - 50,
        height: this.height - 1,
        fontSize: this.fontSize
      },
      borderBottomStyle: {
        width: this.width,
        height: 1,
        backgroundColor: 'transparent'
      },
      isEditing: false,
      inputValue: ''
    }
  },
  watch: {
    value: {
      handler: function(v) {
        this.$emit('input', v)
      }
    }
  },
  created() {

  },
  mounted() {

  },
  activated() {

  },
  methods: {
    clearInput(event) {
      this.value = ''
      this.$refs.input.focus()
    },
    onFocus() {
      this.isEditing = true
    },
    onBlur() {
      setTimeout(() => {
        this.isEditing = false
      }, 100)
    }
  },
  components: {

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.ss-input {
}
.clear {
  position: absolute;
  right: 0;
  top: -2px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
}
</style>
