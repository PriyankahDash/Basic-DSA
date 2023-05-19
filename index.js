
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs(array, target) {
    const pairs = [];
    const map = {};
  
    for (let num of array) {
      const complement = target - num;
      if (map[complement]) {
        pairs.push([num, complement]);
      }
      map[num] = true;
    }
  
    return pairs;
  }
  
  const array = [1, 2, 3, 4, 5];
  const targetSum = 6;
  const result = findPairs(array, targetSum);
  console.log(result);
 


  
// Q2.  Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

  function reverseArrayInPlace(array) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
  
    while (leftIndex < rightIndex) {
      // Swap elements at leftIndex and rightIndex
      var temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
  
      // Move the indices towards the center
      leftIndex++;
      rightIndex--;
    }
  }





//   Q3. Write a program to check if two strings are a rotation of each other?


  function areRotations(str1, str2) {
    // Check if both strings have the same length
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Concatenate str1 with itself
    var temp = str1 + str1;
  
    // Check if str2 is a substring of temp
    if (temp.includes(str2)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function
  var string1 = prompt("Enter the first string:");
  var string2 = prompt("Enter the second string:");
  
  if (areRotations(string1, string2)) {
    console.log("The strings are rotations of each other.");
  } else {
    console.log("The strings are not rotations of each other.");
  }
  
  



//   Q4. Write a program to print the first non-repeated character from a string?

function findFirstNonRepeatedCharacter(str) {
    const charCount = new Map();
  
    for (const char of str) {
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null; // Return null if no non-repeated character is found
  }
  
  const inputString = "abracadabra";
  const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log("The first non-repeated character is:", firstNonRepeatedChar);
  } else {
    console.log("There are no non-repeated characters in the string.");
  }
  





//   Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n > 0) {
      // Move n-1 disks from source to auxiliary peg
      towerOfHanoi(n - 1, source, auxiliary, destination);
  
      // Move the nth disk from source to destination peg
      console.log(`Move disk ${n} from ${source} to ${destination}`);
  
      // Move the n-1 disks from auxiliary to destination peg
      towerOfHanoi(n - 1, auxiliary, destination, source);
    }
  }
  
  // Test the towerOfHanoi function
  const numDisks = parseInt(prompt("Enter the number of disks:"));
  towerOfHanoi(numDisks, 'A', 'C', 'B');

  





//   Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(char) {
    const operators = ['+', '-', '*', '/', '^'];
    return operators.includes(char);
  }
  
  function postfixToPrefix(expression) {
    const stack = [];
  
    for (let char of expression) {
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const prefix = char + operand2 + operand1;
        stack.push(prefix);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = prompt("Enter postfix expression:");
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Prefix expression:", prefixExpression);
  



//  Q7. Write a JavaScript program to convert prefix expression to infix expression



function isOperator(char) {
    var operators = ['+', '-', '*', '/'];
    return operators.includes(char);
  }
  
  function prefixToInfix(prefixExpr) {
    var stack = [];
    var length = prefixExpr.length;
    for (var i = length - 1; i >= 0; i--) {
      var char = prefixExpr[i];
      if (isOperator(char)) {
        var operand1 = stack.pop();
        var operand2 = stack.pop();
        var infixExpr = '(' + operand1 + char + operand2 + ')';
        stack.push(infixExpr);
      } else {
        stack.push(char);
      }
    }
    return stack.pop();
  }
  
  var preExpression = "*+AB-CD";
  var infixExpression = prefixToInfix(preExpression);
  console.log("Infix expression:", infixExpression);
  
  




//  Q8. Write a program to check if all the brackets are closed in a given code snippet


function checkBrackets(code) {
    const stack = [];
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
  
      if (brackets.hasOwnProperty(char)) {
        // Opening bracket
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        // Closing bracket
        if (brackets[stack.pop()] !== char) {
          // Mismatched brackets
          return false;
        }
      }
    }
  
    return stack.length === 0; // Check if there are any unclosed brackets left in the stack
  }
  



//   Q9. Write a program to reverse a stack.


        // Stack implementation
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove top element from the stack
    pop() {
      if (this.items.length === 0) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Get the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Reverse the stack
    reverse() {
      if (this.isEmpty()) {
        return;
      }
      const reversedStack = new Stack();
      while (!this.isEmpty()) {
        reversedStack.push(this.pop());
      }
      this.items = reversedStack.items;
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log("Original Stack:", stack.items);
  
  stack.reverse();
  console.log("Reversed Stack:", stack.items);
  



//   Q10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      this.Stak = [];
      this.minStack = [];
    }
  
    push(value) {
      this.Stak.push(value);
  
      if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      const popped = this.Stak.pop();
  
      if (popped === this.getMin()) {
        this.minStack.pop();
      }
  
      return popped;
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const Stak = new MinStack();
  Stak.push(5);
  Stak.push(2);
  Stak.push(8);
  Stak.push(1);
  
  console.log("The smallest number is:", Stak.getMin());
  