function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const merge = function (head1, head2) {
console.log("head1", head1)
console.log("head2", head2)
  const head0 = new ListNode(0);
  let tmp = head0,
    tmp1 = head1,
    tmp2 = head2;
  while (tmp1 !== null && tmp2 !== null) {
    if (tmp1.val <= tmp2.val) {
      tmp.next = tmp1;
      tmp1 = tmp1.next;
    } else {
      tmp.next = tmp2;
      tmp2 = tmp2.next;
    }
    tmp = tmp.next;
  }
  while (tmp1 !== null) {
    tmp.next = tmp1;
    tmp1 = tmp1.next;
    tmp = tmp.next
  }
  while (tmp2 !== null) {
    tmp.next = tmp2;
    tmp2 = tmp2.next;
    tmp = tmp.next
  }
  return head0.next;
};
const mergeList = function (head, tail) {
  if (head === null) return head;
  if (head.next === tail) {
    // head.next = null;
    return head;
  }
  let fast = head;
  let slow = head;
  while (fast !== tail) {
    fast = fast.next;
    slow = slow.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const middle = slow;
  return merge(mergeList(head, middle), mergeList(middle, tail));
};
var sortList = function (head) {
  return mergeList(head, null);
};

const h0 = new ListNode(4);
const h1 = new ListNode(2);
const h2 = new ListNode(1);
const h3 = new ListNode(3);
h0.next = h1;
h1.next = h2;
h2.next = h3;
console.log(sortList(h0));
