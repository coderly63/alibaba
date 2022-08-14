class Node {
  constructor(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
  }
}
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map()
  let cur = head
  let fast = head,
    low = head
  while (cur) {
    map.set(cur, new Node(cur.val))
    cur = cur.next
    if (fast && fast.next) {
      fast = fast.next.next
      low = low.next
      if (low === fast) break
    }
  }
  cur = head
  fast = head
  low = head
  while (cur) {
    const copeNode = map.get(cur)
    copeNode.next = map.get(cur.next) || null
    copeNode.random = map.get(cur.random) || null
    cur = cur.next
    if (fast && fast.next) {
      fast = fast.next.next
      low = low.next
      if (low === fast) break
    }
  }
  return map.get(head)
}

const p = {
  val: 1,
  next: {
    val: 2,
    next: null,
    random: null,
  },
  random: null,
}

copyRandomList(p)
