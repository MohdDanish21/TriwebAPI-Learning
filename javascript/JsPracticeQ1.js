//[Create Array.prototype.last(). return the last element of array if array is empty then return -1]


Array.prototype.last=function(){
    return this.length===0? -1: this[this.length-1]
}
const arr=[12,24,56]
console.log(arr.last());
// console.log(arr.length);