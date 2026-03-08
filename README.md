 # Javascript Fundamental concepts and ES6 Syntex

## 1. What is the difference between var, let, and const?
### Ans :
 var , let and const all are javascript variable to store different kinds of data like number , strings, array , objects etc. But they differ in how they behave after declaration. var and let allow us to change its value after declaration but const does not allow it . var also allow to access data before it is assigned but let and const do not allow it. Because of this behaviour we should not use var in our code .

## 2. What is the spread operator (...)?
### Ans :
This is a ES6 operator that allows us to spread the element of an array and object . As we cannot run function directly on the individual element of and array like (Math , addition , subtraction) , using spread operator allow us to run function directly to the individual elemnt of an array and object (...array), (...object)

## 3. What is the difference between map(), filter(), and forEach()?
### Ans :
1. map() funtion return a array of same length it usually add / change something to the main array and return a new array of same length.
2. filter() on the other hand return the conditional value of that array , it may return same number of element if the condition is true but usually it filter out the false conditional element of the array.
3. forEach() is a loop method it execuate a funtion for all the element .

## 4. What is an arrow function?
### Ans :
arrow is a Javascript ES6 Syntex to write funtion like this (=>) . This arrow like syntex separate the main body form parameter , we can also use curly braces {} to write multiple lines of code in this case we have to return the output. 

## 5. What are template literals?
### Ans :
 Template literals is also a Javascript ES6 method to write multiple lines of strings inside javascript code using backtick  (``). It also allows us to write javascript variables that is very helpful for DOM manipulation and conditional rendering
