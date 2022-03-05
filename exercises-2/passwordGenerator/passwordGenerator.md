# Password Generator

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Nama function haruslah `changeVocals`, `reverseWord`, `setLowerUpperCase`, `removeSpaces`,
dan `passwordGenerator` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

- Panjang password `minimal berjumlah 5 karakter`, apabila kurang dari 5 maka tampilkan pesan error sesuai keinginan kalian.
---

## Directions

**Change Vocals**

Diberikan sebuah function `changeVocals` yang menerima satu parameter string. Dimana function ini akan mereplace semua huruf vocal yang terdapat dalam string yang diberikan dan menggantinya dengan huruf konsonan setelah huruf vocal tersebut. Perhatikan contoh berikut:

```js
function changeVocals(str) {
  // Your code here
}

console.log(changeVocals('Sergei Dragunov')) // Sfrgfj Drbgvnpv
console.log(changeVocals('Irsyah Mardiah')) // Jrsybh Mbrdjbh
```

**Reverse Word**

Diberikan sebuah function `reverseWord` yang menerima satu parameter string. Dimana function ini akan merubah string yang diberikan sehingga dicetak terbalik (dari belakang ke depan). Perhatikan contoh berikut:

```js
function reverseWord(str) {
  // Your code here
}

console.log(changeVocals('I Love JavaScript')) // tpircSavaJ evoL I
console.log(changeVocals('Irsyah Mardiah')) // haidraM haysrI
```

**Set Lowercase and Uppercase**

Diberikan sebuah function `setLowerUpperCase` yang menerima satu parameter string. Dimana function ini akan merubah setiap huruf di dalam string tersebut menjadi kebalikannya (lowercase menjadi uppercase dan sebaliknya). Perhatikan contoh berikut:

```js
function setLowerUpperCase(str) {
  // Your code here
}

console.log(setLowerUpperCase('i love hacktiv8')) // I LOVE HACKTIV8
console.log(setLowerUpperCase('Irsyah Mardiah')) // iRSYAH mARDIAH
```

**Remove Space**

Diberikan sebuah function `removeSpaces` yang menerima satu parameter string. Dimana function ini akan meremove setiap empty space (spasi) sehingga kata-kata yang terpisah menjadi tersambung. Perhatikan contoh berikut:

```js
function removeSpaces(str) {
  // Your code here
}

console.log(removeSpaces('Sergei Dragunov')) // SergeiDragunov
console.log(removeSpaces('Irsyah Mardiah')) // IrsyahMardiah
```

**Password Generator**

Diberikan sebuah function `passwordGenerator` yang menerima satu parameter string. Berikut adalah kriteria untuk function `passwordGenerator`:

- Harus memanfaatkan 4 function yang telah dibuat sebelumnya, yaitu `changeVocals`, `reverseWord`, `setLowerUpperCase` dan `removeSpaces` dan dipanggil di dalam function `passwordGenerator` secara berurutan sehingga menghasilkan `random string` berdasarkan parameter awal yang diberikan
- Menampilkan pesan error `Minimal karakter yang diinputkan adalah 5 karakter` jika paramter string yang diberikan panjangnya kurang dari 5 karakter

Perhatikan contoh berikut:

```js
function changeVocals (str) {
  //code di sini
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
```