console.log('one');
setTimeout(function exec() {
  console.log('two');
}, 0);

console.log('three');

console.log('one');

setTimeout(()=>{
console.log('two');
},2000)

console.log('three');


console.log('one');
asyncForEach([1, 2, 3],(num) => console.log(num));
console.log('three');

function asyncForEach(arr,cb){
for(let i=0; i<arr.length ;i++){
  cb(arr[i])
}
}
console.log("one")

console.log("Three")
setTimeout(()=> asyncForEach([1, 2, 3],(num) => console.log(num))  ,1000)

console.log('First Call');
[1, 2, 3, 4, 5].firEach((num) => console.log(num));
console.log('Last Call');




setTimeout(()=> [1, 2, 3, 4, 5].firEach((num) => console.log(num)))