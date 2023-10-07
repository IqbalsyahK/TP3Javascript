// Mengimpor modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface pembacaan input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Minta input dari pengguna
rl.question('Masukkan bilangan genap: ', (input) => {
  // Parse input sebagai bilangan floating point
  const x = parseFloat(input);

  // Periksa apakah x kurang dari 0
  if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
    rl.close();
  }
  // Periksa apakah x ganjil
  else if (x % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
    rl.close();
  } else {
    // Hitung akar pangkat 2 dari x
    const result = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
    rl.close();
  }
});