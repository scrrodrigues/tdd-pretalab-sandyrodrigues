class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }
  add(item){
    return this.elements.push(item)
  }
  peek(item){
    return this.elements[0]
  }
  dequeue(item){
    return this.elements.shift(item)
  }
}

module.exports = Queue