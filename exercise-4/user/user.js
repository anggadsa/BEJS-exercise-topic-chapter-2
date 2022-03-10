class User {
    #passwordObj;
    constructor(obj){
        this.name = obj.name;
        this.email = obj.email;
        this.#passwordObj = obj.password;
        this.password = this.#changePassBaru();
    }
    #changePassBaru(){
       
        function changeVocals(str) {
            // Your code here
            let vokal = ""
            let string = "";
            let change = "";
            for(let i=0; i < str.length; i++) {   
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
            
            for(let i=0; i < str.length; i++) {   
        
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
            return reverseWord(string)
        }

        function removeSpaces(str) {
            // Your code here
            let string = "";
            let change = "";
           
            for(let i=0; i < str.length; i++) {   
            if(str.charCodeAt(i)!=32){
                    change = str.charAt(i);
                    string = string + change;
                } else {
                    change = "";
                    string = string + change;
                }
            }
            return setLowerUpperCase(string)

        
        }
        
        function passwordGenerator(name) {
            if(name.length > 4){
                return removeSpaces(name)
            } else {
                return 'Minimal karakter yang diinputkan adalah 5 karakter'
            }
            
        }
        let generate = this.#passwordObj;
        return this.#passwordObj = passwordGenerator(generate);
     

    }
    // Batas functions
   
}

const user1 = new User({
    name: 'Hafid',
    email: 'hafid@mail.com',
    password: 'pass123',
});
console.log(user1);
// User { name: 'Hafid', email: 'hafid@mail.com', password: '321SSBP' }

