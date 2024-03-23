console.log("Starting of ep2");
const hey = {
  userName: "Anshul",
  age: 18,
  insta: "anshulfml",
  linkdin: "Anshul-exe",
};

console.log("hey");
// lecture notes starts from below
/*console.log("hey2");
alert("haha")*/
console.log("hello, World!");
console.log(hey);

let a = 4;
let b = 3;
console.log("a =", a, "& b =", b);
console.log(a + b);
console.log("a+b= ", a + b);
let c = a + b;
console.log("a + b = ", c);
// alert(a+b) --> this works but making it in a comment to stop disturbing program's output
/* alert(a)
 alert(b) Phle upar vali line ka alert aega then neeche vali */
console.log(a);
a++; //unary operator
++a;
console.log(a);
console.log("a =", a);
console.log("b=", b++); //phle print hui then add hui value
console.log("b=", b++); //upar add hogai thi toh fir added value print hui
console.log(b); //ab upar vale statement se add hoke 5 print ho rha hai
a += 4; //now 6+4 = 10 as a was 6
console.log(a);
console.log("a==b", a == b);
console.log("a==10", a == 10);
console.log("a>b", a >= b);
console.log("a is not equal to b", a != b);
console.log("a=", a, "b=", b);
let d = "5";
console.log(
  "b is equal to d",
  b == d
); /* when we give any number in a string and compare
it to any other number as above then it changes the string digit(not alphabetical number)
into a digit (number) and then compares it*/
let cond1 = a > 7;
let cond2 = a == 10;
let cond3 = a < 13;
let cond4 = a >= 10;
console.log(
  "All conditions for AND(&&) are ",
  cond1 && cond2 && a < 13 && cond4
);

//Logical OR operator

console.log("All conditions for OR(||) are ", a > 22 || b == 5);
console.log("All conditions for OR(||) are ", a > 22 || b == 3);

//Logical NOT operator

console.log("(Not !)10 < 5", !a < b);
// vote or not (if else)
let age = 25;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't");
}
// odd even
let num = 34;
if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
//ternary operator
console.log(num);
let result =
  num >= 17
    ? "↑ it is bigger than given no."
    : "↑ It is smaller than given no.";
console.log(result);
num >= 55
  ? console.log(num, "is bigger than given no.")
  : console.log(num, "is smaller than given no.");

// practice question 1 --> Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

let x = prompt("Enter a number: ");
if (x % 5 == 0) {
  console.log(x, "is a multiple of 5");
} else {
  console.log(x, "is not a multiple of 5");
}

//Practice Qs2 --> Write a code which can give grades to students according to their scores:
let grade = prompt("Enter your Marks:");
let v;
if (grade <= 49 && grade >= 0) {
  v = "You got a F";
} else if (grade >= 50 && 59 >= grade) {
  v = "You got a D";
} else if (grade >= 60 && 69 >= grade) {
  v = "You got a C";
} else if (grade >= 70 && 89 >= grade) {
  v = "You got a B";
} else if (grade >= 90 && 100 >= grade) {
  v = "You got a A";
} else {
  console.log("You have entered an invalid grade");
}
console.log("According to your grade", v, "and your score was", grade);
