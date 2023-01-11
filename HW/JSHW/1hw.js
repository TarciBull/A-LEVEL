const arr = [];
let numbers = 100;
while(arr.length < numbers) {arr.push(Math.round(Math.random()*100))};
function newArray( [ ] ){
 let arr2 = arr.filter((el)=> el>50).sort((a , b)=> a - b)};
 console.log(newArray(arr))