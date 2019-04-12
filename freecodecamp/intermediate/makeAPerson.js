// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
  let nameArr = firstAndLast.match(/[a-zA-Z]+/g)
  this.getFullName = function () {
    return nameArr.join(' ');
  }
  this.getFirstName = function(){
    return nameArr[0]
  }
  this.getLastName = function(){
    return nameArr[1]
  }
  this.setFirstName = function(first){
    nameArr[0] = first
    return first
  }
  this.setLastName = function(last){
    nameArr[1] = last
    return last
  }
  this.setFullName = function(fullName){
    nameArr = fullName.split(' ')
    return this.getFullName()
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length)
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName)
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.getFullName())
console.log(bob.setFirstName("Haskell")) 
console.log(bob.getFullName())
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName())
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getLastName())

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").