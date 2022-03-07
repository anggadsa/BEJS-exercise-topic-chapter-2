function shappingLetter(){
    let num = 5;
    let string = "";

    for(i=1 ;i <= num; i++){

        for(j=1 ; j <= num ;j++){
            string += "#"
        }
        string += "\n"
    
        for(k=1 ; k<= num -1 ;k++){
            string += " "
        }

    }

    console.log(string)
}

shappingLetter();