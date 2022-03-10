var readline = require(`readline-sync`);

class Siswa{
    constructor(nama, nilai) {
        this.nama = nama;
        this.nilai = nilai;
    }
}

class Sekolah{
    constructor(){
        this.ranking = []; //kumpulan siswa   
    }
    newSiswa(nama, nilai){
        
        let tambahSiswa = new Siswa(nama, nilai);
        this.ranking.push(tambahSiswa)
        return tambahSiswa
    }

    get semuaSiswa(){
        return this.ranking;
    }
}

let condition = false

while(!condition){

    let nama = readline.question(`Masukan input 1: `);
    let value = readline.question(`Masukan input 2: `);

    let nilai = parseInt(value)

    let inputSiswa = new Sekolah(); //make an object
    inputSiswa.newSiswa(nama, nilai); //input a siswa

    let kondisi = readline.question(`Apakah anda ingin lanjut tekan (ya?/q): `);
    // console.log(inputSiswa.semuaSiswa);
    if(kondisi === `q`){
        condition = true
        console.log(inputSiswa)
        console.log(inputSiswa.semuaSiswa);
       
    
    }
}


// while(!condition){

//     let nama = readline.question(`Masukan input 1: `);
//     let value = readline.question(`Masukan input 2: `);

//     let nilai = parseInt(value)

//     let inputSiswa = new Sekolah(); //make an object
//     inputSiswa.newSiswa(nama, nilai); //input a siswa

//     let kondisi = readline.question(`Apakah anda ingin lanjut tekan (ya?/q): `);
//     // console.log(inputSiswa.semuaSiswa);
//     if(kondisi === `q`){
//         condition = true
//         console.log(inputSiswa)
//         console.log(inputSiswa.semuaSiswa);
       
    
//     }
// }
    
// let inputSiswa1 = new Sekolah();
// inputSiswa1.newSiswa(`Angga`, 90);
// inputSiswa1.newSiswa(`Dwi`, 80);

// console.log(inputSiswa1.semuaSiswa)
