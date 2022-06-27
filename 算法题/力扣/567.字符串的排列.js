/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 自定义方法，用于比较滑动窗口中的数据与目标数据是否相同
  function equal(a, b) {
    // equal方法的比较思路：a和b 都是两个长度为26 的数组，数组当中的每个数据都对应着一个字符的数量
    // 例如a[0] 就代表着a 字符串当中字符'a' 的数量，a[1]就代表着字符串当中字符'b'的数量
    // 因此，只有在a,b 两个数组的每一个值都相等才能说明a,b 代表的字符串内的各个字符的数量相等，也只有在这种情况下equal 函数会返回true ，否则都会返回false
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  let arrP = new Array(26).fill(0),
    arr = new Array(26).fill(0),
    len1 = s1.length,
    len2 = s2.length
  // 将目标数据放入数组，之后使用该数组与滑动窗口进行对比
  for (let i = 0; i < len1; i++) arrP[s1.charCodeAt(i) - 'a'.charCodeAt()]++

  // 遍历整个长字符串，在字符串内部使用滑动窗口逐一访问判断
  for (let i = 0; i < len2; i++) {
    // 创建滑动窗口数组，滑动窗口数组的长度应与目标数组相同
    arr[s2.charCodeAt(i) - 'a'.charCodeAt()]++
    // 滑动窗口创建完成之前不进行任何操作，长度不同不可能与目标数组相符
    if (i >= len1 - 1) {
      // 滑动窗口创建完毕之后即刻开始与目标窗口进行比对，比对一致即返回true
      if (equal(arr, arrP)) return true
      else {
        // 比对不一致，则滑动窗口向右滑动，最左边字符退出窗口，进入下一次循坏，在下一次循环中又会将窗口外右边的第一个字符放入窗口
        arr[s2.charCodeAt(i - len1 + 1) - 'a'.charCodeAt()]--
      }
    }
  }
  // 比对完成都没有发现匹配数据，则说明无匹配数据，返回false
  return false
}
