
const palindromeAngka = ()=>{
    
    let angka = 175;
    for (i=0; i < 100; i--){
        arr = [];
        
        arr = [...String(angka)];
        if(arr[0] === arr[arr.length-1]){
            return `${angka}`
        } else {
            angka = angka + 1
        }
    }

}

console.time(`Countdown Time`)
console.log(palindromeAngka())
console.timeEnd(`Countdown Time`)