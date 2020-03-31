// Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// creating an array
let arr = [1,2,3,4,5,6,7,8,9,10];
// acessing property length
let length = 0;
length = arr.length;
console.log("Length of array before addition: " + length);
// Add element to an Array
arr.push(11);
length = arr.length;
console.log("Length of array after addition: " + length);
// using for loop to loop and access array items
for (let index = 0; index < length; index ++)
{
    console.log("Index: " + index + ", Value: " + arr[index]);
}
///chanes laskdjflkasdf
// using while loop to loop and access array items with if condition safasdfa
let index = 0;
while (index < length){
  if (arr[index] % 2 == 0){
    console.log("Value: " + arr[index] + " is even.");
  }
  else {
    console.log("Value: " + arr[index] + " is odd.");
  }
  index += 1; // increment using += which is same as index ++
}

// using do while to sum contents of the array
index = 0;
let sum = 0;
do{
  sum = sum + arr[index]; // same as sum += arr[index]
  index ++;
} while(index < length);
console.log("Sum: " + sum);
// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
let object = {"A":1,"B":2,"C":3};

// using for-in loop to loop within object
for (let property in object) {
  console.log("Key " + property + " has " + object[property] + " as value." );
}

// Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let today = Date();
let yesterday = new Date('2020-03-29T03:24:10');
console.log(yesterday);
console.log(yesterday.getFullYear());
console.log(yesterday.getMonth()); // Returns the month (0–11) in the specified date according to local time
console.log(yesterday.getDay()); // Returns the day of the week (0–6) for the specified date according to local time.
console.log(yesterday.getHours());
console.log(yesterday.getMinutes());
console.log(yesterday.getSeconds());