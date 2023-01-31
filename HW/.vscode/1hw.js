{const arr = [];
let numbers = 100;
while(arr.length < numbers) {arr.push(Math.round(Math.random()*100))};
function newArray( [ ] ){
 let arr2 = arr.filter((el)=> el>50).sort((a , b)=> a - b)
 return arr2 }}

 {const arr = [];
   let numbers = 100;
   let abc = "abc";
   while(arr.length < numbers) {arr.push(abc)};
   function NewObj(arr){
   arr.sort((a,b)=> a - b);
   let newObj = ({...arr});
   return newObj};}