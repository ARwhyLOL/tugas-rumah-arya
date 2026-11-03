// Soal 1: ganjil atau genap
function ganjilGenap (angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "ganjil";
    }
}

console.log("soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); //ganjil
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); //genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`); //genap

// Soal 2: celcius ke Fahrenheit
function celciuskeFahrenheit (celcius) {
    return (celcius * 9 / 5) + 32;
}

console.log("soal 2: celcius ke Fahrenheit");
console.log(`celciuskeFahrenheit(0) = ${celciuskeFahrenheit(0)}`);
console.log(`celciuskeFahrenheit(100) = ${celciuskeFahrenheit(100)}`);
console.log(`celciuskeFahrenheit(-40) = ${celciuskeFahrenheit(-40)}`);

//soal 3: nilai Terbesar
function nilaiTerbesar (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else {
        return "Ada nilai yang sama";
    }
}

console.log("soal 3: nilaiTerbesar");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 75, 90) = ${nilaiTerbesar(80, 75, 90)}`);
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`);

// Soal 4: Tahun Kabisat
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) ||
        tahun % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("Soal 4: Tahun Kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`);

// Soal 5: Diskon Belanja
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.80;
    } else if (total >= 100000) {
        return total * 0.90;
    } else {
        return total;
    }
}
console.log("Soal 5: Diskon Belanja");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`);