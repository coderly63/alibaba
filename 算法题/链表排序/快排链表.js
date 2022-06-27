function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var swap = function (p, q) {
  const tmp = p.val
  p.val = q.val
  q.val = tmp
}
var partition = function (head, tail) {
  let p = head,
    q = head.next
  while (q !== tail) {
    if (q.val < head.val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, head)
  return p
}
var quickSort = function (head, tail) {
  if (head !== tail) {
    const partitionIndex = partition(head, tail)
    quickSort(head, partitionIndex)
    quickSort(partitionIndex.next, tail)
  }
  return head
}

const h0 = new ListNode(4)
const h1 = new ListNode(2)
const h2 = new ListNode(1)
const h3 = new ListNode(3)
h0.next = h1
h1.next = h2
h2.next = h3
console.log(quickSort(h0, null))
