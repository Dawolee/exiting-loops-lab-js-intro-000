function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    else {
      array[i] = changeValue;
    }
  }
  return array;
}

var keepGoing = (array, changeValue, skipValue) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] === changeValue;
      continue;
    }
  }
  return array;
}

var findBy = (array, findFn) => {

}
