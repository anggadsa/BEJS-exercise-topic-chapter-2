function hereComesTheLadder(kata){

    let string = "";
    let reverse = "";

    for(j=kata.length; j>=0; j--){
        reverse += kata.charAt(j)
    }

    for(i=1; i< kata.length+1; i++){

        for(k=0; k < kata.length -i ;k++){
            string += " "
        }
        // With decrement
        for(j=i-1; j>=0; j--){
            string += reverse.charAt(j)
        }
        // With increment makes pyramid output 
        // for (let j = 0; j < i; j++) {
        //     string += kata.charAt(j)
        // }
        string += "\n"

    }
    // console.log(reverse.charAt(3))
    
    return string;
    // return reverse
}
console.log(hereComesTheLadder('foxie'));
console.log(hereComesTheLadder('3oz4spoon'));
console.log(hereComesTheLadder('087840'));