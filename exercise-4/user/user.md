# User

`WAJIB MEMBUAT CLASS.`

### HINTS

- Nama `Class` haruslah `User` dan __tidak boleh diganti dengan nama class lainnya__. Untuk detail class akan mengacu kepada [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu membuat class dan melakukan manipulasi method maupun property di dalamnya.
- Dapat menghasilkan suatu class dengan tujuan dan fungsi tertentu.

## Directions

- Diberikan sebuah `class` bernama `User` dimana class tersebut akan kita gunakan untuk memberikan constructor property user berbentuk `object` berisikan `username, email, password`.

- Buatlah beberapa method yang mengimplementasikan fungsi-fungsi di tugas `GeneratePassword` kita sebelumnya oleh class `User`.

- Ingat baik-baik bahwa method yang berhubungan dengan `password` harus `BERSIFAT AMAN DARI AKSES LUAR`.

Melalui penjelasan diatas, diharapkan hasil seperti contoh berikut:


```js
class User {

}

const user1 = new User({
    name: 'Hafid',
    email: 'hafid@mail.com',
    password: 'pass123',
});

console.log(user1);
// User { name: 'Hafid', email: 'hafid@mail.com', password: '321SSBP' }
```