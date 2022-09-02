/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const h0 = new ListNode(-1, head)
  let fast = head, slow = h0
  n -= 1
  while (n--) {
    fast = fast.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next || null
  return h0.next
};