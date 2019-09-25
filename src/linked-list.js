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
            this._tail = node;
        }
        this._tail.next = data;
        node.prev = this._tail.data;
        this._tail = node;
        console.log(node);
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

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = 0;
        this._tail = 0;
        this.length = 0;
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
