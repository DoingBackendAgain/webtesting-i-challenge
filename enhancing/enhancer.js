module.exports = {
  success,
  fail,
  repair,
  get,
  sum,
};

function success(item) {
  let enhancement = item.enhancement
  // if (item.enhancement < 20){
  //   enhancement += 1
  // }
  return {...item,
     enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
    };
  
}
// another way to view this problem
// it's expecting to return an object with 3 days and values
// function success(item){
//   const newObject = {}

//   if(item.enhancement < 20){
//       newObject.enhancement = item.enhancement +1
//   } else {
//       newObject.enhancement = item.enhancement
//   }
//   return newObject
// }


function fail(item) {
  let durability = item.durability
  let enhancement = item.enhancement 
   if (enhancement < 15){
     durability -=5
   } else if (enhancement > 16){
     enhancement -= 1, 
     durablity -=10
   } else {
     durability -= 10
   }
  return { ...item,  durability, enhancement };
}

function repair(item) {
 durability = 100
 
 return {...item, durability}
};

function get(item) {
  let enhancement = item.enhancement
  let name = item.name
  if(enhancement > 0){
    name = `[+${enhancement} ${name}]`
  }
  return { ...item, enhancement, name };
}

function sum(a,b){
  return a+b
}



// `./enhancing/enhancer.js` exports an object that has the following methods:

// - a `repair(item)` method that accepts an `item` object and
//  **returns a new item** with the durability restored to 100. 
//  This method is the simplest of the three and would be a
//   **good starting point** on this project.
// - a `success(item)` method that accepts an `item` object and 
// **returns a new item** object modified according to the rules
//  defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and
//  **returns a new item** object modified according to the rules 
//  defined by the client for enhancement failure.
// - a `get()` method for use when working on the stretch problem.
