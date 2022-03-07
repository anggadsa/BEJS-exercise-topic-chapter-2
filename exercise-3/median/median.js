function cariMedian(arr) {
    // you can only write your code here!
  
    let result = 0;
    
    if(arr.length % 2 === 0){
        for(i=0; i <= arr.length-1; i++){

            result = result + arr[i]
        }
        result = result / arr.length
        result = result
    } else {
        let median = arr.length / 2 + 0.5
        result = arr[median-1]
    }

    if((result +0.5) %2  == 0){
        result = result
    } else {
        result = ~~result
    }

    return result
  
}


console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); //7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5