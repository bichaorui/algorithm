// 选择排序

const s = '1234056789'

let arr = s.split('')
let aimArr = []

// for (let i = 0; i < arr.length; i++) {
//   console.log('____________________', i)
//   insertFun(arr[i])
// }




function insertFun(e) {
  let len = aimArr.length
  if (len > 0) {
    let q, h
    for (let n = 0; n < aimArr.length; n++) {
      const element = aimArr[n]
      if (e > element) {
        q = e
      } else {
        h = h || e
      }
    }
    console.log(q, h)
  } else {
    aimArr.push(e)
  }
}
console.log(aimArr)
