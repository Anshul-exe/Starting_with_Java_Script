console.log("Starting of ep3");
console.log("---------------");
//For LOOP
for (let i = 1; i <= 2; i++) {
  console.log("count =", i);
}
let sum = 0;
let n = 7 // prompt("Enter your no. here:")
for (let i= 1 ; i <= n ; i++){
    sum = sum + i
}
console.log("Your answer is :",sum)
//WHILE LOOP
let l = 1;
while (l<=5){
    console.log("Hey",l)
    l++
}
//DO WHILE LOOP
let i = 1;
 do {
  console.log("i=", i);
  i++
 } while (i<=5);
 //FOR-OF LOOP
 let str = "heyYoo";
 let size = 0;
 for(let val of str){
  console.log ("val=",val)
  size++
 }
 console.log("Size of string is =", size)

 //FOR-IN LOOP
 let student = {
  name: "Anshul Singh Chauhan",
  age: 20,
  cgpa: 7.5,
  isPass: true
 };
 for (let key in student) {
  console.log(key)
 }
console.log("hey");