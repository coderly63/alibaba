var reverseBetween = function (head, left, right) {
  let h0 = new ListNode(-1)
  h0.next = head
  let pre = h0
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let leftNode = pre.next
  let rightNode = leftNode
  for (let i = 1; i <= right - left; i++) {
    rightNode = rightNode.next
  }
  let last = rightNode.next
  pre.next = null
  rightNode.next = null
  reverseList(leftNode)
  pre.next = rightNode
  leftNode.next = last
  return h0.next
}

function reverseList(head) {
  let pre = null
  cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
}

const p = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

reverseBetween(p, 2, 4)
// reverseBetween({
//   val: 5,
//   next: null
// }, 1, 1)

// 1->2->3->4->5
