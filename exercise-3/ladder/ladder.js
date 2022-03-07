function ladder(word) {
    //your code here
    let arr = [];
    let arr2 = [];
    let string = [ '4', 'a', 'n', 'g', 'r', 'y', 'm', 'e', 'n' ]
    for(i=1; i <= string.length;  i++){
        for(j=0; j <= string.length-1; j++){
            arr2[i-1][j] = string[i-1];
            
            // arr[i-1] += word.toString(word.charAt(j))
            // arr[i-1] += string.toString[j]
            // for(k=0 ;k < word.length-j+1; k++){
            // //    arr[i][j][k] = string[k]

            //     console.log(`array${i-1} index ke ${j} berisi ${string[k]}`)
            // }
            // arr += []
            // arr[i][]
            // console.log(`index ke  ${i} berisi element ${j}`)
        }
        // arr[i-1] = arr2[i-1]
        // arr2 = [];
        // console.log(`i =  ${i}`)
    }
    // console.log(arr2.length)
    // console.log(word.length)
    // for(p=0; p<string.length; p++){

    //     arr[p] = string[p]
    // }
    // arr += `${string[0]}`
    console.log(string.length)
    return arr2
}
  
  // DRIVER CODE
  console.log(ladder('4angrymen'));
