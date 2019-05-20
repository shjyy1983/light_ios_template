<template>
  <div class="button" :style="styles" @click="$emit('click')" @touchstart="onTouchstart" @touchend="onTouchend">
    <div class="wrapper">
      <text class="title" :style="{color: color}">{{title}}</text>
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
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 60
    },
    backgroundColor: {
      type: String,
      default: '#4277eb'
    },
    borderRadius: {
      type: Number,
      default: 12
    },
    font: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  data() {
    return {
      backgroundColor_: this.backgroundColor
    }
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
        fontSize: this.font,
        borderRadius: this.borderRadius,
        backgroundColor: this.backgroundColor_
      }
    }
  },
  mounted() {

  },
  methods: {
    onTouchstart() {
      this.backgroundColor_ = this.highlightColor(this.backgroundColor, 10)
    },
    onTouchend() {
      this.backgroundColor_ = this.backgroundColor
    }
  }
}
</script>

<style scoped>
.wrapper {
  flex: 1;
  justify-content: center;
  align-items: center;
}
.title {
  color: white;
}
</style>
