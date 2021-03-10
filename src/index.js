
exports.min = function min (array) {  
  if(!array || array.length < 1) return 0; 
  let sorted = array.sort(function(a,b){ return a-b});
  let sortedMin = sorted.shift();
  return sortedMin;
}

exports.max = function max (array) {
  if(!array || array.length < 1) return 0; 
  let sorted = array.sort(function(a,b){ return a-b});
  let sortedMax = sorted.pop();
  return sortedMax;
}

exports.avg = function avg (array) {
  return 0;
}
