const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" },
    { nama: "Menggambar", level: "Mahir" },
    { nama: "JavaScript", level: "Dasar" }
];

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
    skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = `${skill.nama} (${skill.level})`;
        daftarSkill.appendChild(item);
    });

    jumlahSkill.textContent =
        `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}


// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        document.body.classList.toggle("gelap");

        const sedangGelap =
            document.body.classList.contains("gelap");

        tombolTema.textContent = sedangGelap
            ? "Mode Terang"
            : "Mode Gelap";
    });
}


// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
    kotakPesan.addEventListener("input", () => {
        hitungKarakter.textContent =
            `${kotakPesan.value.length}/300 karakter`;
    });
}
const proyek = [
    {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/Capture.PNG",
    alt: "Tangkapan layar halaman profil Arya wahyu dwi prasetyo",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
    },
    {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/Kontak.PNG",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
    },
    {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/Jadwal.PNG",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
    },
    {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/proyek-responsif.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
    },
    {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/Kalkulator.PNG",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
    },
    {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/soal.PNG",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan.",
    },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");


// 6. Fungsi membuat kartu proyek
function buatKartu(item) {
    return `
        <article class="kartu">
            <span class="label">${item.kategori}</span>
            <h3>${item.judul}</h3>
            <img src="${item.gambar}" alt="${item.alt}" width="280">
            <p>${item.deskripsi}</p>
        </article>
    `;
}


// 7. Fungsi menampilkan proyek
function tampilkanProyek(daftar) {
    const semuaKartu = daftar.map((item) => buatKartu(item));

    daftarProyek.innerHTML = semuaKartu.join("");

    jumlahProyek.textContent =
        `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

// 8. Fungsi memasang filter proyek
function pasangFilter(idTombol, kategori) {
    const tombol = document.querySelector(idTombol);

    if (tombol) {
        tombol.addEventListener("click", () => {

            // Menghapus class aktif dari semua tombol
            document.querySelectorAll(".tombol-filter").forEach((btn) => {
                btn.classList.remove("aktif");
            });

            // Memberikan class aktif pada tombol yang diklik
            tombol.classList.add("aktif");

            // Menampilkan proyek sesuai kategori
            if (kategori === "Semua") {
                tampilkanProyek(proyek);
            } else {
                tampilkanProyek(
                    proyek.filter((item) => item.kategori === kategori)
                );
            }
        });
    }
}

// 9. Menampilkan proyek dan memasang semua filter
if (daftarProyek && jumlahProyek) {
    tampilkanProyek(proyek);

    pasangFilter("#filter-semua", "Semua");
    pasangFilter("#filter-html", "HTML");
    pasangFilter("#filter-css", "CSS");
    pasangFilter("#filter-javascript", "JavaScript");
}