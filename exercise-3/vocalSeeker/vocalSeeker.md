# Vocal Seeker

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun.

### HINTS

- Nama function haruslah `vocalSeeker` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Objectives

- Mampu mengakses array multidimensi
- Mampu membedakan type data number dan yang bukan
- Mampu menggunakan template literals

## Directions

Diberikan sebuah function bernama `vocalSeeker` dimana function tersebut menerima satu paremeter array multidimensi.

Function akan mengembalikan jumlah vokal dan kumpulan vokal yang ditemukan dari array multidimensi tersebut.

```
function vocalSeeker(board) {
  // Write your code here
}

//DRIVER CODE

let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b'],
]
console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
```
