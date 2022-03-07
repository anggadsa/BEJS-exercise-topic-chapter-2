function xAndOTriangle(){
    let string = ""
    let num = 3

    for(i=1; i<=num; i++){

        for(j=1; j<=num - i; j++){
            string += " "
        }

        for(k=0; k <i * 2 -1;k++){
            if(k%2==0){
                string += "x"
            } else {
                string += "o"
            }
        }
        string += "\n"
    }
    console.log(string)

}

xAndOTriangle()