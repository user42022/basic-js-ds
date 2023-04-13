const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value=null){
    this.value = value
    this.next = null
  }
  
  getUnderlyingList() {
    return this
  }

  enqueue(value) {
    
    if ((!!this.value)&&(!!this.next)){
        this.next.enqueue(value)
      }
    if ((!!this.value)&&(!this.next)){
        this.next= new Queue(value)
      }
    if (!this.value){
      this.value=value
    }   
  }

  dequeue() {
    const returnValue = this.value
    if (!!this.next){
      const nextItem = this.next
      this.value = nextItem.value
      this.next = nextItem.next
      return returnValue
    }
    if (!this.next){
      this.value= null
      return returnValue
    }
    
  }
}

module.exports = {
  Queue
};
