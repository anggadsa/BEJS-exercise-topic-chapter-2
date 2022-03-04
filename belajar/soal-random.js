const sittingArragement = (str, column) =>{
    let arr = [];
    let arr2 = [];

    // let column = 3;
    // let str = ['Angga Dwi Satria', 'Lukman', 'Setia',`Budi`, `Dipati`, `Ukur`,`Hai`];

    let h = 0;
    for(let i = 0; i < column; i++){
        // console.log (`${i}`) //Count i
        if(str.length < 4){
            arr[i] = str
            i = column +1
        } else {
            for(j=0; j < str.length -1;  j++){
                arr2[j] =  str[h]
                h++
                if(arr2.length == column){
                    arr[i] = arr2;
                    arr2 = [];
                    break
                }
            }
        }
    }
    // Check and change with `Kursi Kosong` if array element is undifined
    for(i=0; i < arr.length; i++) { 
        for(j=0; j < arr[i].length; j++){
            if(arr[i][j] === undefined){
                arr[i][j] = `Kursi Kosong`;
            }
        }
    }
    
    // console.log(str.length) //Count str.length
    
// v1
    // Change END of index to `Kursi Kosong`
    // arr[arr.length-1][elementAkhir] = `Kursi Kosong`;
    // console.log(arr[arr.length-1][-1]) //CEK Index Akhir
    // for(j=0; j < arr.length; j++){
    //     console.log(arr[j].length)
    // }
    
    // console.log(str.length)
    return arr
}

console.time(`Consumed Time`)
console.log(sittingArragement(['Angga Dwi Satria', 'Lukman', 'Setia',`Budi`, `Dipati`, `Ukur`,`Hai`], 3));
console.log(`\n`)
console.log(sittingArragement(['Lukman', 'Setia',`Budi`], 3));
console.log(`\nMasih salah untuk iterasi`)
console.log(sittingArragement(['Angga Dwi Satria', 'Lukman', 'Setia',`Budi`, `Puji`], 2));
console.timeEnd(`Consumed Time`)