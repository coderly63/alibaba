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
var sortList = function (head) {
  return splitList(head, null)
}

const merge = function (head1, head2) {
  const head0 = new ListNode(0)
  let tmp0 = head0
  let tmp1 = head1,
    tmp2 = head2
  while (tmp1 && tmp2) {
    if (tmp1.val > tmp2.val) {
      tmp0.next = tmp2
      tmp2 = tmp2.next
    } else {
      tmp0.next = tmp1
      tmp1 = tmp1.next
    }
    tmp0 = tmp0.next
  }
  if (tmp1) tmp0.next = tmp1
  if (tmp2) tmp0.next = tmp2
  return head0.next
}
const splitList = function (head, tail) {
  if (head === null) return head
  if (head.next === tail) {
    head.next = null
    return head
  }
  let fast = head,
    low = head
  while (fast !== tail) {
    fast = fast.next
    low = low.next
    if (fast !== tail) fast = fast.next
  }
  const middle = low
  return merge(splitList(head, middle), splitList(middle, tail))
}
