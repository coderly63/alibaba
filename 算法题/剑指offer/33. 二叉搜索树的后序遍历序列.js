/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  const n = postorder.length
  if (n <= 1) return true
  const root = postorder[n - 1]
  let right = n - 1
  for (let i = 0; i < n - 1; i++) {
    if (postorder[i] < root) continue
    right = i
    break
  }
  for (let i = 0; i < right; i++) if (postorder[i] > root) return false
  for (let i = right; i < n - 1; i++) if (postorder[i] < root) return false
  return (
    verifyPostorder(postorder.slice(0, right)) &&
    verifyPostorder(postorder.slice(right, n - 1))
  )
}

console.log(verifyPostorder([4, 6, 7, 5]))
