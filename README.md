# Javascript: Loops and Arrays

## Task 1: findIndex

**Create a function that takes two arguments: One array and one other value. The function should return the index of the value inside the array.**

Use the empty function wrapper in the `findIndex.js` file.

In Javascript, elements inside an array are accessible with an index that starts
at 0:

```
Array:   let myArray = [ "hello", "bonjour", "hola", "ciao" ];
Indexes:                    0         1         2       3

console.log(myArray[0]);    // ==> "hello"
console.log(myArray[2]);    // ==> "hola"
```

We can loop through the elements of an array with the `for` loop:

```
for (let i = 0; i < myArray.length; i++) {
  const value = myArray[i];
  
  console.log("At index " + i + ", the value is " + value);
}

Prints:
At index 0, the value is hello
At index 1, the value is bonjour
At index 2, the value is hola
At index 3, the value is ciao
```

Use a for loop to iterate through the entire array. For each element, test
whether the value at the current index is equal to the value to search using an
`if`-conditional. If it is, return the index.

If the value to search doesn't exist in the array, return a suitable value that
indicates so. You can use a negative number for example, since array indexes
cannot be negative.

In the end, you should be able to use your function as shown here:
```
let myArray = [ "hello", "bonjour", "hola", "ciao" ];
console.log(findIndex(myArray, "hello"));      // should print 0
console.log(findIndex(myArray, "bonjour"));    // should print 1
console.log(findIndex(myArray, "hola"));       // should print 2
console.log(findIndex(myArray, "ciao"));       // should print 3
```

## Task 2: sort

**Create a function that takes an array as argument, and sorts it**

Depending on whether it's an array of numbers or of strings, it should be sorted
from smallest to largest, or alphabetically. The operations for doing so are
identical, meaning you don't have to distinguish between numbers or strings
anywhere in your function.

It is up to you whether you want to sort "in place", meaning that you modify the
original array, or create a new array with the sorted values.

For sorting, try to think how you would sort a stack of cards. An example might
be:

1. Start at the first card, compare it with the second.
    -  If the first card has a smaller value than the second, do nothing.
    -  If the first card has a larger value than the second, swap them.
2. Then, move on to the second and third card
    - Compare these two, swap them if necessary.
3. Move on to the third and fourth and repeat the steps above until you are at
   the end of the stack.
4. Once at the end, check if the stack is sorted.
5. If not, repeat the steps 1-4 again.

You can test whether the list is sorted by testing whether each element is
smaller than its successor. Use a helper variable to store this.
A function that tests, whether an array is sorted, may look like this;

```
function isSorted(array) {
  let isSorted = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
    }
  }

  return isSorted;
}
```

For swapping two variables, use a third helper variable:
```
// Assuming that you have two variables a and b you want to swap:
let tmp = a;
a = b; 
b = tmp;
```

In the file `sort.js`, there are two example arrays that you can use for testing
your function.

The above sorting algorithm can be visualised as following:

```
1st iteration

[ 5, 1, 3, 7, 2, 4 ]
  ^--^
  Is 5 > 1?
  Yes ==> Swap

[ 1, 5, 3, 7, 2, 4 ]
     ^--^
     Is 5 > 3?
     Yes ==> Swap

[ 1, 3, 5, 7, 2, 4 ]
        ^--^
        Is 5 > 7?
        No ==> Do nothing

[ 1, 3, 5, 7, 2, 4 ]
           ^--^
           Is 7 > 2?
           Yes ==> Swap

[ 1, 3, 5, 2, 7, 4 ]
              ^--^
              Is 7 > 4?
              Yes ==> Swap

[ 1, 3, 5, 2, 4, 7 ]
Is the array sorted?
No ==> Repeat

2nd iteration

[ 1, 3, 5, 2, 4, 7 ]
  ^--^
  Is 1 > 3?
  No ==> Do nothing

[ 1, 3, 5, 2, 4, 7 ]
     ^--^
     Is 3 > 5?
     No ==> Do nothing

[ 1, 3, 5, 2, 4, 7 ]
        ^--^
        Is 5 > 2?
        Yes ==> Swap

[ 1, 3, 2, 5, 4, 7 ]
           ^--^
           Is 5 > 4?
           Yes ==> Swap

[ 1, 3, 2, 4, 5, 7 ]
              ^--^
              Is 5 > 7?
              No ==> Do nothing

[ 1, 3, 2, 4, 5, 7 ]
Is the array sorted?
No ==> Repeat

3rd iteration

[ 1, 3, 2, 4, 5, 7 ]
  ^--^
  Is 1 > 3?
  No ==> Do nothing

[ 1, 3, 2, 4, 5, 7 ]
     ^--^
     Is 3 > 2?
     Yes ==> Swap

[ 1, 2, 3, 4, 5, 7 ]
        ^--^
        Is 3 > 4?
        No ==> Do nothing

[ 1, 2, 3, 4, 5, 7 ]
           ^--^
           Is 4 > 5?
           No ==> Do nothing


[ 1, 2, 3, 4, 5, 7 ]
              ^--^
              Is 5 > 7?
              No ==> Do nothing

[ 1, 2, 3, 4, 5, 7 ]
Is the array sorted?
Yes ==> Done!
```

Of course, you may use a different approach to sorting the array as well.