
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let count = array.reduce((accumulator, index) => {
      return (accumulator + index);
    });
    return (count / array.length).toFixed(2);
  }
}
