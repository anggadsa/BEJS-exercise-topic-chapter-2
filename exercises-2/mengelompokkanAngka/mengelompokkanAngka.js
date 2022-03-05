function mengelompokkanAngka(arr) {
    // you can only write your code here!
    arr2=[[],[],[]]

    for(i=0; i < arr.length; i++){

        if(arr[i] % 3 === 0){
            arr2[2][arr2[2].length] = arr [i];
        } else if(arr[i] % 2 === 0) {
            arr2[0][arr2[0].length] = arr [i];
        } else {
            arr2[1][arr2[1].length] = arr [i];
        }
    }
    // console.log(arr[0])
    return arr2
}
console.time(`Countdown Time`)
console.log(mengelompokkanAngka([2, 4, 6])) // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])) // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])) // [ [], [], [] ]
console.timeEnd(`Countdown Time`)