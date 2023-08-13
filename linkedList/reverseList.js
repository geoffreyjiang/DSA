class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;

        prev = current;
        current = nextTemp;
    }

    return prev;
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

let reversedList = reverseLinkedList(list);

let current = reversedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
