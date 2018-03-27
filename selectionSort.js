//selectinSort

var arr = [29, 64, 73, 34, 20];

for(var i=0; i<arr.length; i++){
  for(var j=i+1; j<arr.length; j++){
    if(arr[j] < arr[i]){
      //swap
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}

for(var k=0; k<arr.length; k++){
  console.log(arr[k]);
}
