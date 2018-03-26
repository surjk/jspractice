//bubbleSort

var arr = [2, 7, 4, 1, 8, 3, 0, 11];

for(var j=(arr.length-1); j>=0; j--){
  for(var i=1; i<=j; i++){
    if(arr[i-1] > arr[i]){
      var temp = arr[i-1];
      arr[i-1] = arr[i];
      arr[i] = temp;
    }
  }
}

for(var k=0; k<arr.length; k++){
  console.log(arr[k]);
}
