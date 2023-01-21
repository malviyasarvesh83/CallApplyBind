var obj = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

// Call
var sum = addToThis.call(obj, 1, 2, 3);
console.log(sum);

// Apply

var arr = [1, 2, 3];
var sum = addToThis.apply(obj, arr);
console.log(sum);

// Bind

var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));

// Call Apply And Bind
