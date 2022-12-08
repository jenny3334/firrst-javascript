//function to print adition of result
function sum (A,B) {
     result = A + B;
    return result
}
console.log(sum (10,30))

//to check if they are of the same data type (===)
const num = 1;
const num2 = "1";
console.log(num === num2)

//using function, variables and if statements to print "welcome" and the listed names
//step 1
const people = ["uju", "ola", "yusuf",]
function displayName () {
    console.log("welcome!!! " + people[0]  )
    console.log("welcome!!! " + people[1]  )
    console.log("welcome!!! " + people[2]  )
    
}
displayName()

//step2
const arrayList = ["dave", "james","mike"]
function displayname (name){
    for (var i = 0; i < name.length; i++ ) {
        console.log("welcome " + name[i])
    }
}
displayname(arrayList)

//step 3
var fun = ["dave", "james","mike"]
fun.forEach(fun => {
    console.log("welcome " + fun)
})

//function if and else to satisfy a condition
function test (val) {
    if(val <= 50 && val >= 25) {
        return "yes";
    } else {
        return "no";
    }
}
console.log(test(10));

//using for, while and do while loop to print even numbers backwards from 10
var bun = [];
for (var i = 10; i > 0; i -= 2) {
    bun.push(i);
}
console.log(bun);



var dun = [];
var i = 10;
while (i > 0) {
    dun.push(i);
    i -= 2;
}
console.log(dun);

var pun = [];
var j = 10;
do{
    pun.push(j);
    j -= 2;
}while(j > 0)
console.log(pun)