//bucket sort

var unsortedArray = [1, 3, 2, 0, 9, 6, 3, 5, 2, 3, 3];

var sortedArray = [];
var x = 0;
for (var p=0; p<unsortedArray.length; p++) {
  if(unsortedArray[p] > x) {
    x = unsortedArray[p];
  }
}

for(var y=x; y>0; y--) {
  sortedArray[y] = 0;
}

for(var i=0; i<unsortedArray.length; i++) {
  sortedArray[unsortedArray[i]]++;
}

for(var j=0; j<sortedArray.length; j++) {
  for(var k=0; k<sortedArray[j]; k++) {
    console.log(j);
  }
}
