/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const h0 = new ListNode(-1, head)
  let pre = h0, start = null, end = h0, next = null
  while (end) {
    for (let i = 0; i < k && end; i++) end = end.next
    if (!end) break
    start = pre.next
    next = end.next
    end.next = null
    pre.next = reverseList(start)
    start.next = next
    // 重新定位
    pre = start
    end = start
  }
  return h0.next
};

function reverseList(head) {
  if (!head || !head.next) return head
  const h0 = reverseList(head.next)
  head.next.next = head
  head.next = null
  return h0
}