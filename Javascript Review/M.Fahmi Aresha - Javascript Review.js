// 1. 
// Kerjakan Soal - Soal dibawah ini dalam bentuk live code.
// -Buatlah variable dengan let dan const.
// -Gunakan console.log() untuk menampilkan isi variable di console browser.

// A. Buatlah sebuah array berisi 5 buah-buahan (string).
    let buahArray = ['Apel', 'Jeruk', 'Anggur', 'Pisang', 'Mangga'];
    console.log('Step A:', buahArray);

    // B. Lalu tambahkan satu buah.
    buahArray.push('Strawberry');
    console.log('Step B:', buahArray);

    // C. Edit/ubah satu buah.
    buahArray[2] = 'Nanas';
    console.log('Step C:', buahArray)

    // D. Kurangi satu buah terakhir dari array.
    buahArray.pop();
    console.log('Step D:', buahArray);


// 2. 
// A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
    let saya = {
        nama_depan: 'Fahmi',
        nama_belakang: 'Aresha',
        hobi: ['Badminton', 'Sepeda'],
        angka_favorit: 3,
        memakai_kacamata: false
    };
    
    // B. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
    console.log('Step A:', saya);

    // C. Cetak nama_lengkap dengan console.log.
    console.log('Nama Lengkap:', saya.nama_depan + ' ' + saya.nama_belakang);

    // D. Ubah angka_favorit jadi 8.
    saya.angka_favorit = 8;
    console.log('Step D:', saya);

    // E. Tambahkan satu hobi "coding".
    saya.hobi.push('Coding');
    console.log('Step E:', saya);

    // F. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
    saya.lulusan = 'Hacktiv8';
    console.log('Step F:', saya);

    // G. Cetak semua hobi satu per satu menggunakan loop.
    console.log('Step G:');
    for (let i = 0; i < saya.hobi.length; i++) {
    console.log('  - ' + saya.hobi[i]);
    }

    // H. Cetak semua key milik objek, dan cetak semua values milik objek.
    console.log('Step H:');
    for (let key in saya) {
    console.log(key);
    }

    for (let key in saya) {
    console.log(saya[key]);
    }

    // I. Gunakan loop untuk cetak semua property milik objek dengan format key: values.
    console.log('Step I:');
    for (let value in saya) {
    console.log(value + ':', saya[value]);
    }
  
// 3.
// A. Buatlah sebuah function.
// B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
  function getCurrDate() {
    let currentDate = new Date();
    
    let day = currentDate.getDate();
    let month = currentDate.getMonth() +1; 
    let year = currentDate.getFullYear();
  
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
  
    let formattedDate = day + '/' + month + '/' + year;
  
    return formattedDate;
  }
  let tanggalHasil = getCurrDate();
  console.log('Tanggal Sekarang:', tanggalHasil);

  // 4.
    // A. Buatlah sebuah function yang menerima sebuah angka.
    // B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
    // C. Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut dalam formatstring “ganjil” atau “genap”
    // D. Tes dengan console log hasil function tersebut dengan angka:2, 3, 20, 21
    // E. Tambahkan pengecekan tipe data di function tersebut.
    // F. Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, maka langsungreturn “Invalid Data”.

  function cekGanjilGenap(angka) {
    if (typeof angka !== 'number' || isNaN(angka)) {
        return "Invalid Data";
    }
    else if (angka % 2 === 0) {
        return "Genap";
    }
    else{
        return "Ganjil";
    }
}
  // create function sum
 
  console.log(cekGanjilGenap(2));  
  console.log(cekGanjilGenap(3)); 
  console.log(cekGanjilGenap(20)); 
  console.log(cekGanjilGenap(21));
  
  console.log(cekGanjilGenap("Hello"));  
  console.log(cekGanjilGenap(true));     
  console.log(cekGanjilGenap(NaN));      


  function isArithmeticSequence(arr) {
    if (arr.length < 2) {
      return false;
    }
  
    // Hitung selisih pertama
    const commonDifference = arr[1] - arr[0];
  
    // Periksa selisih antar angka yang lain
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== commonDifference) {
        return false;
      }
    }
  
    // Jika selisih konsisten untuk semua pasangan angka, maka itu adalah deret aritmatika
    return true;
  }
  
  // Contoh penggunaan
  const array1 = [2, 4, 6, 8];
  const array2 = [2, 4, 6, 9];
  
  console.log(isArithmeticSequence(array1)); // Output: true
  console.log(isArithmeticSequence(array2)); // Output: false
  