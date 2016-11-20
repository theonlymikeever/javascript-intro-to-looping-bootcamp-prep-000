function forLoop(array) {
  for (var i = 0; i < 25; i++) {
      if (array[i] === 1) {
        array.push("I am 1 strange loop.")
      }
      else {
        array.push(`I am ${i} strange loops`);
      }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    --n;
  }
  return "done"
}

function doWhileLoop(passedArray) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    passedArray.pop();
  } while (maybeTrue() && passedArray.length > 0);
  return passedArray;
}
