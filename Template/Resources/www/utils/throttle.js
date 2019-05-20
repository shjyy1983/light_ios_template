/*
 * @Author: SHEN
 * @Date: 2019-04-22 23:56:41
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-30 10:53:49
 *
 *
 */

var throttle = function(fn, delay) {
  var now, lastExec, timer, context, args; //eslint-disable-line

  var execute = function() {
    fn.apply(context, args)
    lastExec = now
  }

  return function() {
    context = this
    args = arguments

    now = Date.now()

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (lastExec) {
      var diff = delay - (now - lastExec)
      if (diff < 0) {
        execute()
      }
    } else {
      execute()
    }
  }
}

export default throttle
