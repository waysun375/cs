//1// 233
//1// 2344

// cs 

// cs2


// 12312

//  节流函数
function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

//  测试用例
function log() {
  console.log('log')
}
const throttleLog = throttle(log, 1000)
throttleLog()
throttleLog()
throttleLog()
throttleLog()
