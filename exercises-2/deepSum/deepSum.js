function deepSum(arr) {
    // write your code here
    let num = 0;
    if (arr.length == 0){
        return `No Number`
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]); // [1, 2, 3]       [3, 4, 5]
       
        for (let j = 0; j < arr[i].length; j++) {
            // num = num + arr[i][j]
            // console.log(arr[i][j]); // 1, 2, 3    3, 4, 5
            for(let k = 0; k < arr[i][j].length; k++){
                num = num + arr[i][j][k];
                // console.log(arr[i][j][k])
            }
        }
    }
    return num
}

// console.log(num)
console.time(`Countdown Time`)
console.log(
    deepSum([
      [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
      ],
      [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
      ],
      [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
      ]
    ])
  ) // 316
  
  console.log(
    deepSum([
      [[20, 10], [15], [1, 1]],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
      [[3, 5, 1], [1, 5, 3], [1]],
      [[2]]
    ])
  ) // 156
  
console.log(deepSum([])) // No number
  
console.log(
deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 9, 10, 11], [2], [9, 11]],
    [[2]]
])
)
console.timeEnd(`Countdown Time`)