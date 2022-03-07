function cariMedian(arr) {
    // you can only write your code here!
    // let result = arr[0] / arr[arr.length-1]
    // console.log(arr[2])
    let result = 0;
    
    for(i=0; i <= arr.length-1; i++){
        // let increment = arr[i]
        result = result + arr[i]
    }
    result = result / arr.length
    return result
  
}


console.log(cariMedian([1, 2, 3, 4, 5])); // 3