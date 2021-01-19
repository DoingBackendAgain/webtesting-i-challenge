module.exports = {
  success,
  fail,
  repair,
  get,
  sum,
};

function success(item) {
  return {...item};
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.slice(1).indexOf(0) > -1) {
    throw new Error("Can not divide by 0")
  }
  return item.slice(1).reduce((a,b)=> a/b, item[0] || 0)
};

function get(item) {
  return { ...item };
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
