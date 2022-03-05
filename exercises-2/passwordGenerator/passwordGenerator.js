function changeVocals(str) {
    // Your code here
    let vokal = ""
    let string = "";
    let change = "";
    for(i=0; i < str.length; i++) {   
        if (str.charAt(i) == "a"||str.charAt(i) == "A" ||
        str.charAt(i) == "i" ||str.charAt(i) == "I" ||
        str.charAt(i) == "e" ||str.charAt(i) == "E" ||
        str.charAt(i) == "o"||str.charAt(i) == "O") {
            vokal = str.charCodeAt(i) + 1
            change = String.fromCharCode(vokal) 
            string = string + change;
        }
        else {
            change = str.charAt(i);
            string = string + change;
        }
    }

    return string
    
    // return arr, str
    
}

function reverseWord(str) {
    // console.log(str.length)
    let string = "";
    let change = "";

    for(let i = str.length - 1;  i > -1 ; i--){
        change = str.charAt(i);
        string = string + change;
    }
    return changeVocals(string)
}

function setLowerUpperCase(str) {
    // Your code here
    let charCode = 0;
    let string = "";
    let change = "";
    
    for(i=0; i < str.length; i++) {   

        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) !=32) {
            charCode = str.charCodeAt(i) - 32;
            change = String.fromCharCode(charCode) 
            string = string + change;
        }
        else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) != 32){
            charCode = str.charCodeAt(i) + 32;
            change = String.fromCharCode(charCode) 
            string = string + change;
        } else if (str.charCodeAt(i) >= 48){
            charCode = str.charCodeAt(i);
            change = String.fromCharCode(charCode) 
            string = string + change;
        } else {
            change = " ";
            string = string + change;
        }
    }
    // return string
    return reverseWord(string)
}

function removeSpaces(str) {
    // Your code here
    let charCode = 0;
    let string = "";
    let change = "";
   
    for(i=0; i < str.length; i++) {   
    if(str.charCodeAt(i)!=32){
            change = str.charAt(i);
            string = string + change;
        } else {
            change = "";
            string = string + change;
        }
    }
    return setLowerUpperCase(string)

    // return string

}

function passwordGenerator (name) {
    //code di sini

    if(name.length > 4){
        return removeSpaces(name)
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
