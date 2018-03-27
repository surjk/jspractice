//bubble again

var arr = [4, 1, 7, 3, 2, 9, 8, 0, 5];

for(var i=0; i<=arr.length-1; i++){
  for(var j=1; j<=arr.length; j++){
    if(arr[j-1] > arr[j]){
      var temp = arr[j-1];
      arr[j-1] = arr[j];
      arr[j] = temp;
    }
  }
  for(var k=0; k<arr.length; k++){
    console.log(arr[k]);
  }
console.log("\n");
}
