// function sum () {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// 
// function sum (...args) {
//   return args.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// Function.prototype.myBind = function () {
//   const args1 = Array.from(arguments);
//   const otherThis = this;
//   // console.log(args1); //[Dog object, 'meow']
//   return function () {
//     const args2 = Array.from(arguments);
//     // console.log(args1.slice(1).concat(args2));//['meow', 'Markov']
// 
// 
//     return otherThis.apply(args1[0], args1.slice(1).concat(args2));
//   };
// };

Function.prototype.myBind = function (context, ...bindArgs) {
  return (...extraArgs) => {
    return this.apply(context, bindArgs.concat(extraArgs));
  };
};



// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// 
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
// 
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// 
// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");
// 
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
// 
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true
// 
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// true

// function curriedSum(numArgs) {
//   const numbers = [];
// 
//   return function _curriedSum (num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       // return numbers.reduce(add, 0);
//       let sum = 0;
//       for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//       }
//       return sum;
//     } else {
//       return _curriedSum;
//     }  
//   }; 
// }

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56
// 


// 
// Function.prototype.curry = function (numArgs) {
//   const numbers = [];
// 
//   const _curriedFunc = (num) => {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return this(...numbers);
//     } else {
//       return _curriedFunc;
//     }  
//   }; 
// 
//   return _curriedFunc;
// };

Function.prototype.curry = function (numArgs) {
  const numbers = [];
  const ourFunction = this;
  
  function _curriedFunc (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return ourFunction.apply(null, numbers);
    } else {
      return _curriedFunc;
    }  
  }
  return _curriedFunc;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); //what is numbers? [4] [4,20] [4, 20, 6] returns 30













  