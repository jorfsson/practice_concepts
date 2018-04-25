function memoryDist(arr){
  var arrDuplicateCheck = [];

  function nextIndex(ind){
    return ind == 3 ? 0 : ind + 1;
  }

  function addToEls(originalArr) {
    var largestNum = Math.max(...originalArr);
    var largestNumIndex = originalArr.indexOf(largestNum);

    var startIndex = nextIndex(largestNumIndex);
    let a = startIndex;
    originalArr[largestNumIndex] = 0;
    for (var i = largestNum; i > 0; i--) {
      originalArr[a] =  originalArr[a] + 1;
      if (a == 3) {
        a = 0;
      } else {
        a += 1;
      }
    }
    return originalArr
 }
}
var test = [2, 4, 1, 2];
memoryDist(test);
