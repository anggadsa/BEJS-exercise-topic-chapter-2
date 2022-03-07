function ladder(word) {
    //your code here
    let arr = [];
    for(i=1; i <= word.length;  i++){
        for(j=0; j <= word.length; j++){
            // console.log(charAt(j))
            for(k=0 ;k < word.length-j+1; k++){
                arr[i-1][j][k] = `${word.charAt(k)}`

                // console.log(`array${i-1} index ke ${j} berisi ${word.charAt(k)}`)
            }
            // arr += []
            // arr[i][]
            // console.log(`index ke  ${i} berisi element ${j}`)
        }
        // console.log(`i =  ${i}`)
    }
    // console.log(word.length)
    // arr = 
    return arr
}
  
  // DRIVER CODE
  console.log(ladder('4angrymen'));