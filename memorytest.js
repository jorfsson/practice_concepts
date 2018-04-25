function memoryDist(arr){
  var arrDuplicateCheck = [];
  var largestNum = Math.max(...arr);
  var largestNumIndex = arr.indexOf(largestNum);
  var startIndex = nextIndex(largestNumIndex);

  function nextIndex(ind){
    return ind == 3 ? 0 : ind + 1;
  }

  arr[largestNumIndex] = 0;

  function addToEls(originalArr, newIndex, counter) {
    let a = newIndex;
    for (var i = counter; i > 0; i--) {
      originalArr[a] =  originalArr[a] + 1;
      if (a == 3) {
        a = 0;
      } else {
        a += 1;
      }
    }
    arrDuplicateCheck.push(originalArr);
    return originalArr;
 }



}
var test = [2, 4, 1, 2];
memoryDist(test);
