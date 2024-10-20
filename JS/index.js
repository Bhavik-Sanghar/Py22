// Example 1: Simple Counter with Closure

function makeCounter() {
  let count = 0; // Private variable accessible only within makeCounter

  return function() {
    return ++count; // Inner function has access to 'count' even after makeCounter finishes
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1 (Each counter has its own independent 'count')


// Example 2: Data Encapsulation and Privacy

function createPerson(name) {
  let privateAge = 25; // Private variable

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return privateAge;
    },
    setAge: function(newAge) {
      if (newAge > 0) {
        privateAge = newAge;
      } else {
        console.log("Invalid age!");
      }
    }
  };
}

let person1 = createPerson("Alice");
console.log(person1.getName()); // Output: "Alice"
console.log(person1.getAge());   // Output: 25
person1.setAge(30);
console.log(person1.getAge());   // Output: 30
// console.log(person1.privateAge); // Error: privateAge is not accessible from outside

// Explanation:

// 1. Closure:
//    - A closure is created when an inner function has access to variables in its outer function's scope,
//      even after the outer function has finished executing.
//    - In both examples, the inner functions (returned by makeCounter and createPerson) form closures.

// 2. Benefits of Closures:
//    - Data Privacy: Closures help protect data by making variables accessible only within a specific scope.
//    - State Preservation: Closures allow functions to "remember" values between invocations.

// 3. How it Works:
//    - When a function is called, a new execution context is created.
//    - This context includes a lexical environment that keeps track of variables in its scope chain.
//    - When a closure is created, it retains a reference to its outer function's lexical environment.
//    - This allows the closure to access variables from that environment even after the outer function has finished.
