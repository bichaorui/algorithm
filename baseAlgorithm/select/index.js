// 选择排序

const s = '1234056789'

let arr = s.split('')
let aimArr = [],
  i,
  max,
  maxIndex

max = arr[0]
i = 0

function run(len) {
  if (max < Number(arr[i])) {
    max = arr[i]
    maxIndex = i
  } else {
  }
  if (i < len) {
    // console.log('_______________________', i, len, arr[i])
    i++
    run(len)
  } else {
    arr.splice(maxIndex, 1)
    // console.log(aimArr, arr, max)
    aimArr.push(max)
    max = arr[0]
    i = 0
    maxIndex = 0

    const len = arr.length
    if (len > 1) {
      run(len)
    } else {
      aimArr.push(arr[0])
    }
  }
}
run(arr.length)
console.log(aimArr)
