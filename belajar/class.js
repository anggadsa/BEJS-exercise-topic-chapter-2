// class Ayah{
//     constructor(nama, usia, pekerjaan, hobi, password) {
//         let changePassword = password + password;
//         this.nama = nama;
//         this.usia = usia;
//         this.pekerjaan = pekerjaan;
//         this.hobi = hobi;
//         this.password = changePassword;
//     }

//     sayHi() {
//         // return (`Nama saya ${this.nama} sekarang bekerja sebagai ${this.pekerjaan}\ndan masih berusia ${this.usia} selain itu saya suka ${this.hobi} dirumah`)
//         return this.password = `Lur`
//     }
// }



// let profil = new Ayah(`Angga`, 21, `Software Engineer`, `Macul`, `Anjay`)
// console.log(profil)
// // profil.sayHi();

class Ayah{
    constructor (obj){
        this.obj = obj.name;
        this.name = obj.name;
        this.email = obj.email;
        this.passwordObj = obj.password;
    }
    static constructor(obj){
        this.password = obj.password;
    }

    nyobak(){
        return this.password
    }
}

const user1 = new Ayah({
    name: 'Hafid',
    email: 'hafid@mail.com',
    password: 'pass123',
});

// User.passwordObj()
// console.log(Ayah.nyobak(user1));
Ayah.nyobak(user1)