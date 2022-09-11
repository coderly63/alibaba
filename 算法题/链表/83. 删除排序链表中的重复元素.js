/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const h0 = new ListNode(-1, head)
  let pre = h0, cur = pre.next
  while (cur) {
    while (cur.next && cur.next.val === cur.val) cur = cur.next
    pre = pre.next
    if (pre !== cur) pre.next = cur.next
    cur = cur.next
  }
  return h0.next
};