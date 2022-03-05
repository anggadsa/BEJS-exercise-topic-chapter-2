# Deep Sum

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### CLUES

`Clues bersifat tidak wajib diikuti, bila memiliki cara lain, silahkan lanjutkan!`

- Kemungkinan dapat terjadi nested loops, ingat bahwa kita dapat mengakses index 'array parent' dan dijadikan sebagai kondisi untuk mengakses 'array children'.

```js
let arr = [[1, 2, 3], [3, 4, 5]];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // [1, 2, 3]       [3, 4, 5]
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]); // 1, 2, 3    3, 4, 5
  }
}

```

### HINTS

- Nama function haruslah `deepSum` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Implementasikan function `deepSum` untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

```js
function deepSum(arr) {
  // write your code here
}

console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])
) // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]]
  ])
) // 156

console.log(deepSum([])) // No number

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 9, 10, 11], [2], [9, 11]],
    [[2]]
  ])
)
```
