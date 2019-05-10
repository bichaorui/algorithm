// 冒泡

const s = '15723465464526456'

const arr = s.split('')
let aimArr, i

i = 0
aimArr = arr
function run(len) {
  if (aimArr[i] > aimArr[i + 1]) {
    let next = aimArr[i]
    aimArr[i] = aimArr[i + 1]
    aimArr[i + 1] = next
  }
  // console.log(i, aimArr)
  i++
  if (i < len) {
    run(len)
  } else {
    i = 0
    if (len - 1 > 0) {
      run(len - 1)
    } else {
      return
    }
  }
}
run(arr.length - 1)
console.log(aimArr)
