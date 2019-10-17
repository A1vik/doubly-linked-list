const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = 0;
        this._tail = 0;
    }

    append(data) {
        this.length++;

        const node = new Node(data);

        if (!this._head) {
            this._head = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
        }
        this._tail = node;
        // console.log(node, 'tail: ', this._tail);
        return this;
    }

    head() {
        if (!this._head) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (!this._tail) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        let current = this._head;
        let i = 0;

        while(i < index) {
            current = current.next;
            i ++;
        }
        return current.data;
    }

    insertAt(index, data) {
        this.length++;

        let current = this._head;
        let i = 0;

        while(i < index) {
            current = current.next;
            i ++;
        }
        // console.log('current: ', current);

        const node = new Node(data, current.prev, current);
        current.prev.next = node;
        current.prev = node;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = 0;
        this._tail = 0;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let i = 0;

        this.length--;

        while(i < index) {
            current = current.next;
            i ++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
        
        return this;
    }

    reverse() {
        let current = this._head;
        let i = 0;

        while(i < this.length) {
            const next = current.next;
            const prev = current.prev;
            current.next = prev;
            current.prev = next;
            
            current = current.prev;
            i ++;
        }
        const head = this._head;
        const tail = this._tail;
        this._head = tail;
        this._tail = head;

        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i = 0;

        while(current) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
            i ++;
        }

        return -1;
    }
}

module.exports = LinkedList;
