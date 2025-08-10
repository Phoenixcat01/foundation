
// let s = "";
// for (let i = 0; i <= 10; i++) {
//     for (c = 1; c <= i; c++) {
//         s += "*" + " ";
//     }
//     s += '\n';
// }
// console.log(s);


// let s = "";
// for (let i = 10; i >= 0; i--) {
//     for (c = 1; c <= i; c++) {
//         s += "*" + " ";
//     }
//     s += '\n';
// }
// console.log(s);


// Pascal's triangle
// Tentukan jumlah baris yang ingin dibuat
const rows = 6;

// Loop pertama untuk baris (merepresentasikan 'n' dalam C(n, k))
for (let n = 0; n < rows; n++) {
    let rowOutput = ""; // String untuk menyimpan angka di baris saat ini

    // Loop kedua untuk posisi angka di dalam baris (merepresentasikan 'k' dalam C(n, k))
    for (let k = 0; k <= n; k++) {
        let n_factorial = 1;
        let k_factorial = 1;
        let nk_factorial = 1;

        // Loop ketiga untuk menghitung n!
        for (let i = 2; i <= n; i++) {
            n_factorial *= i;
        }

        // Loop keempat untuk menghitung k!
        for (let i = 2; i <= k; i++) {
            k_factorial *= i;
        }

        // Loop kelima untuk menghitung (n-k)!
        for (let i = 2; i <= (n - k); i++) {
            nk_factorial *= i;
        }
        
        // Hitung nilai C(n, k)
        let term = n_factorial / (k_factorial * nk_factorial);
        
        // Tambahkan angka ke string output
        rowOutput += term + " ";
    }
    
    // Cetak string baris ke konsol
    console.log(rowOutput);
};


// rhombus shape
const size = 5; // Ukuran diamond (jumlah baris di bagian atas)

// === BAGIAN ATAS DIAMOND ===
for (let i = 1; i <= size; i++) {
    let rowString = '';

  // Looping untuk spasi di awal
  // Jumlah spasi: (ukuran - baris saat ini)
    for (let j = 0; j < size - i; j++) {
    rowString += ' ';
    }

  // Looping untuk karakter diamond
  // Jumlah karakter: (2 * baris saat ini - 1)
  for (let k = 0; k < 2 * i - 1; k++) {
    rowString += '*';
    }

console.log(rowString);
}

// === BAGIAN BAWAH DIAMOND ===
// Loop ini dimulai dari (ukuran - 1) untuk menghindari duplikasi baris tengah
for (let i = size - 1; i >= 1; i--) {
    let rowString = '';

  // Looping untuk spasi di awal (sama seperti bagian atas)
  // Jumlah spasi: (ukuran - baris saat ini)
    for (let j = 0; j < size - i; j++) {
    rowString += ' ';
    }

  // Looping untuk karakter diamond (sama seperti bagian atas)
  // Jumlah karakter: (2 * baris saat ini - 1)
  for (let k = 0; k < 2 * i - 1; k++) {
    rowString += '*';
    }

console.log(rowString);
}