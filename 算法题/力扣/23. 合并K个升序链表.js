/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const n = lists.length
  if (n === 0) return null
  if (n === 1) return lists[0]
  const mid = Math.floor(n / 2)
  return merge(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)))
};

function merge(l1, l2) {
  const l0 = new ListNode(-1)
  let h1 = l1, h2 = l2, h0 = l0
  while (h1 && h2) {
    if (h1.val <= h2.val) {
      h0.next = h1
      h1 = h1.next
    } else {
      h0.next = h2
      h2 = h2.next
    }
    h0 = h0.next
  }
  if (h1) h0.next = h1
  if (h2) h0.next = h2
  return l0.next
}