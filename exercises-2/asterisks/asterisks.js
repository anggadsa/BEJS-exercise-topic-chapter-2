function barisanBintang(){
    console.log(`1. barisanBintang()`)
    let num = 5
    for(i=1; i <= num; i++){
        console.log("*")
    }

}

barisanBintang()

function barisanBintagDua(){
    console.log(`2. barisanBintagDua()`)
    let num = 5
    let string = ""

    for(i=1; i <= num; i++){
        for(j=1; j<= num; j++){
            string += "*"
        }
        if(i<num){
            string += "\n"
        }
        
    }
    console.log(string)

}

barisanBintagDua()

function barisanTangga(){
    console.log(`3. barisanTangga()`)
    let num = 5
    let string = ""
    for(i=1; i <= num;  i++){
        console.log(string += "*")
    }
    return string
}

barisanTangga()

function barisanTanggaTerbalik(){
    console.log(`4. barisanTanggaTerbalik()`)
    let num = 5
    let string = ""
    for(i=1; i <= num;  i++){
        for(j=0; j <= num-i; j++){
            string += "*"
        }
        string += "\n"
    }
    
    console.log(string);
}

barisanTanggaTerbalik()