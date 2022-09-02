/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let h0 = new ListNode(-1, head)
  let pre = h0, cur = h0.next
  while (cur) {
    if (cur.val === val) pre.next = cur.next
    cur = cur.next
    pre = pre.next
  }
  return h0.next
};