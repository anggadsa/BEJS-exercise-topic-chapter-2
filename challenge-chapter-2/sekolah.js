var readline = require(`readline-sync`);

let condition = false
let arr = [];

function ranking(arr){
    let l = arr.length;
    let nilai = [];
    let rataRata = 0;
    let lulus = 0;
    let tidakLulus = 0;
    // Push nilai siswa
    for(let i=0; i < l; i++){
        nilai.push(arr[i].nilai);
    }
    // Mencari rata rata
    for (let k=0; k < nilai.length; k++){
        rataRata = rataRata + nilai[k]
    }
    // Jumlah lulus dan tidak lulus
    for (let j=0; j< nilai.length; j++){
        if(nilai[j] >= 75){
            lulus++
        } else {
                tidakLulus++
        }
    }
    return `\n1. Nilai tertinggi: ${Math.max(...nilai)} & Nilai Terendah: ${Math.min(...nilai)}\n2. Rata-rata nilai: ${(rataRata/nilai.length).toFixed(1)}\n3. Jumlah Siswa Lulus: ${lulus} & Tidak Lulus: ${tidakLulus}`    
}

// console.log(ranking(arr));

while(!condition){
    let nama = readline.question(`Masukan input 1: `);
    let value = readline.question(`Masukan input 2: `);

    let nilai = parseInt(value)

    let object = {
        nama : nama,
        nilai : nilai,
    } //input a siswa
    arr.push(object);

    let kondisi = readline.question(`Apakah anda ingin lanjut tekan (ya?/q): `);
    // console.log(inputSiswa.semuaSiswa);
    if(kondisi === `q`){
        condition = true
        console.log(ranking(arr));
    }
}
