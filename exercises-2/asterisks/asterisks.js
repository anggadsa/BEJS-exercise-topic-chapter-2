function barisanBintang(){
    console.log(`1. barisanBintang()`)
    let rows = 5
    for(i=1; i <= rows; i++){
        console.log("*")
    }

}

barisanBintang()

function barisanBintagDua(){
    console.log(`2. barisanBintagDua()`)
    let rows = 5
    let string = ""

    for(i=1; i <= rows; i++){
        for(j=1; j<= rows; j++){
            string += "*"
        }
        if(i<rows){
            string += "\n"
        }
    }
    console.log(string)

}

barisanBintagDua()

function barisanTangga(){
    console.log(`3. barisanTangga()`)
    let rows = 5
    let string = ""
    for(i=1; i <= rows;  i++){
        console.log(string += "*")
    }
}

barisanTangga()

function barisanTanggaTerbalik(){
    console.log(`4. barisanTanggaTerbalik()`)
    let rows = 5
    let string = ""
    for(i=1; i <= rows;  i++){
        for(j=0; j <= rows-i; j++){
            string += "*"
        }
    }
    console.log(string);
}

barisanTanggaTerbalik()