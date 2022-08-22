class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

var removeSame = function (head) {
  const h0 = new ListNode(-1, head)
  let last = h0, pre = h0.next, pivot = pre, cur = pre.next
  while (pre) {
    if (!cur || cur.val !== pre.val) {
      if (pivot !== pre) last.next = cur
      else last = pre
      pivot = cur
    }
    if (cur) cur = cur.next
    pre = pre.next
  }
  return h0.next
}

var removeSame = function (head) {
  const h0 = new ListNode(-1, head)
  let pre = h0.next, pivot = pre, cur = pre.next
  while (pre) {
    if (!cur || cur.val !== pre.val) {
      if (pivot !== pre) pivot.next = cur
      pivot = cur
    }
    if (cur) cur = cur.next
    pre = pre.next
  }
  return h0.next
}