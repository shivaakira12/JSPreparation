# Arrays
- Arrays are a fundamental data structure in Javascript. They are used to store the ordered collection of related data in a single variable.

## Arrays Declaration 
 We can declare the array in the following way.
 1. Using the literal notation:
```js
let fruits = ['banana','apple','tomato']
```
2. Using the Array() constructor:
```js
const numbers = new Array(5);
```
The Array() constructor can also be used to create an array with a specified number of elements:
```js
const values = new Array(5).fill(3)
```
It will create a Array of size five with filled 3.
> Output :
```
[ 3, 3, 3, 3, 3 ]
```
## Accessing the Elements from Array 
We can access the Arrays based on the indexing. Indexing starts from '0'
> For Example :
```js
let fruits = ['banana','apple','tomato']
console.log(fruits[0])
console.log(fruits[1])
```
> Output 
```
banana
apple
```
## Length of Arrays and Accessing the Last Element from Array

We can find the length  of the array using `length` property.
```js
const vehicles=["Auto","Bike","Bus"]
console.log(vehicles[vehicles.length-1])
```
> Output 
```
Bus
```
Using the at() method: The at() method takes an index as an argument and returns the element at that index. To access the last element in an array, you can pass in the value -1 to the at() method. For example, the following code accesses the last element in the fruits array:
```js
const vehicles=["Auto","Bike","Bus"]
console.log(vehicles.at(-1));
```
> Output 
```
Bus
```
## Arrays - Add and Remove Elements
In JavaScript, `pop`, `push`, `shift`, and `unshift` are methods used to manipulate arrays. Here are examples demonstrating each of these methods:

1.`push`: Adds one or more elements to the end of an array and returns the new length of the array.
> For Example :
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape','kiwi');
console.log(fruits);
```
> Output :
```
['apple', 'banana', 'orange', 'grape', 'kiwi']
```
2.pop: Removes the last element from an array and returns that element.

> For Example :
```js
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();

console.log(lastFruit); // 
console.log(fruits); /

```
> Output :
```
'orange'
['apple', 'banana']
```
3.unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
> For Example: 
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('grape', 'kiwi');

console.log(fruits);
```
> Output :
```
['grape', 'kiwi', 'apple', 'banana', 'orange']
```
4.shift: Removes the first element from an array and returns that element.
> For Example :
```js
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();

console.log(firstFruit); 
console.log(fruits); 
```
> Output :
```
'apple'
['banana', 'orange']
```
## Looping Array 
> For Loop 
```js
const age=[12,23,45,67,89]
for (let i=0;i<age.length;i++){
  console.log(age[i])
}
```
> Output :
```
12
23
45
67
89
```
### Inbuilt Loop Methods




