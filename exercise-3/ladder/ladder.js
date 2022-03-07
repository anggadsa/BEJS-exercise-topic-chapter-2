function ladder(word) {
    //your code here
    let arr = [];
    for(i=0; i<word.length; i++){
        let arr2 = [];
        for(j=0; j < word.length -i; j++){
            arr2.push(word.charAt(j))
            // console.log(word.charAt(j))
        }
        // console.log(`\n`)
        arr.push(arr2)
       
    }
    return arr
}
  
//   // DRIVER CODE
console.log(ladder('4angrymen'));
console.log(ladder('AnggaDsatria'));