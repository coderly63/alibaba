var addTwoNumbers = function (l1, l2) {
  const l0 = new ListNode(0, null)
  let tmp = l0
  let isTen = 0
  while (l1 || l2) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + isTen
    isTen = Math.floor(val / 10)
    tmp.next = new ListNode(val % 10)
    tmp = tmp.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (isTen) tmp.next = new ListNode(isTen, null)
  return l0.next
};
