const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value=null){
    this.data=value;
    
  }
  
  root() {
    return this.data===null?null:this
  }

  add(value) {
    if (!this.data){
      this.data=value
    }
    if ((!!this.data)&&(value<this.data)){
      if (!this.left){
        this.left = new BinarySearchTree(value)
      }
      else {
        this.left.add(value)
      }
    }
    if ((!!this.data)&&(value>this.data)){
      if (!this.right){
        this.right = new BinarySearchTree(value)
      }
      else {
        this.right.add(value)
      }
    }
  }

  has(value) {
    if (this.data===value){
      return true
    }
    if ((value<this.data)&&(!!this.left)){
      return this.left.has(value)
    }
    if ((value>this.data)&&(!!this.right)){
      return this.right.has(value)
    }
    return false
  }

  find(value) {
    if (this.data===value){
      return this
    }
    if ((value<this.data)&&(!!this.left)){
      return this.left.find(value)
    }
    if ((value>this.data)&&(!!this.right)){
      return this.right.find(value)
    }
    return null
  }
  

  remove(value) {
    //const nodeToDelete = this.find(value)
    

    if (this.data === value&&!this.left&&!this.right){
      this.data = null
      this.left = null
      this.right = null
    }
    if ((value<this.data)&&(!!this.left)){
      this.left.remove(value)
   }
   if ((value>this.data)&&(!!this.right)){
      this.right.remove(value)
   }
    if (this.data === value&&!!this.left&&!this.right){
      const tempObj = this.left
      this.data = tempObj.data
      this.left = tempObj.left
      this.right = tempObj.right
      
    }
    if (this.data === value&&!this.left&&!!this.right){
      const tempObj = this.right
      this.data = tempObj.data
      this.left = tempObj.left
      this.right = tempObj.right
      
    }
    if (this.data === value&&!!this.left&&!!this.right){
      const tempData = this.right.min()
      this.remove(tempData)
      this.data = tempData
    }
    
  }

  min() {
    if (!this.left){
      return this.data
    }
    else {
      return this.left.min()
    }
  }

  max() {
    if (!this.right){
      return this.data
    }
    else {
      return this.right.max()
    }
  }
}

module.exports = {
  BinarySearchTree
};