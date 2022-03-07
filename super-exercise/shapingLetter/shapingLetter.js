function shappingLetter(num){
    
    let string = "";
    let ganjil = num / 2 - 0.5;
    let genap = num / 2 - 0.5
    // console.log(ganjil) 
    for(i=1 ;i <= num; i++){
        if(i == 1 || i == num){
            for(j=1 ; j <= num ;j++){
                string += "#"
            }
            string += "\n"
        } else if (num % 2 == 0){
            for(j=1; j < genap;j++ ){
            string += " "
            }
            string += "||"
            string += "\n"
        } else {
            for(j=1; j < ganjil+1;j++ ){
                string += " "
            }
            string += "|"
            string += "\n"
        }

    }

    return string
}

console.log(shappingLetter(5));
console.log(shappingLetter(6));
console.log(shappingLetter(7));