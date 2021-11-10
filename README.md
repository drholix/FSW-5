# FSWD-Chapter-5-ExpressJS-EJS
Alief Kurniawan 2021

Dibuat dengan ExpressJS & EJS

### Informasi

* Program berjalan di port `3000`, pastikan port tersebut sedang tidak digunakan.
* File `package.json` memuat module `ejs` & `express`.
* File `package.json` telah ditambahkan dengan 2 script yaitu `start` & `dev` yang bisa dijalankan dengan `npm run start` atau `npm run dev`.
* Terdapat penggunaan javascript dalam `login.ejs`, file ini ada di direktori `views`, perhatikan cara penggunaannya & bedakan penggunaan `<% %>` dengan `<%= %>`.
* Terdapat operan variable dari `index.js` ke `login.ejs`, lihat route `/login`, perhatikan cara penggunaanya.
* Terdapat file `.gitignore` yang berisi daftar direktori/file yang tidak ikut diupload ke github, secara best practice disarankan untuk tidak mengupload `node_module` karena ukurannya yang besar.

### Fungsional

* Ketika mengakses route `/` dengan metode GET, pengguna akan dialihkan ke halaman index.
* Ketika mengakses route `/game` dengan metode GET, pengguna akan dialihkan ke halaman game.
* Ketika mengakses route `/login` dengan metode GET, pengguna akan dialihkan ke halaman login.
* Ketika mengirim form ke route `/login` dengan metode POST, server akan membaca `username` & `password` kemudian mencocokkannya dengan data `user-db.json`.
* Ketika mengakses route `/users` dengan metode GET, pengguna akan melihat daftar users yang terdaftar dalam bentuk json.

### Cara menggunakan

1. Clone repository ini via terminal

```
git clone https://github.com/drholix/FSWD-Chapter-5-ExpressJS-EJS.git
```

2. Setelah selesai, masuk ke dalam direktori repository

```
cd FSWD-Chapter-5-ExpressJS-EJS
```

3. Install module yang dibutuhkan

```
npm install
```

4. Jalankan program

```
node index.js
```
