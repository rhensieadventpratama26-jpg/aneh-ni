// Konfigurasi Teks Mengetik
const teksMulai = "Halo! Selamat datang di web baruku... ✨";
let i = 0;

function efekNgetik() {
    if (i < teksMulai.length) {
        document.getElementById("typing-text").innerHTML += teksMulai.charAt(i);
        i++;
        setTimeout(efekNgetik, 100); // Kecepatan mengetik (ms)
    }
}

// Jalankan efek mengetik saat web dimuat
window.onload = efekNgetik;

// Fungsi saat tombol diklik
function mulaiWeb() {
    const musik = document.getElementById("bg-music");
    const tombol = document.getElementById("play-btn");

    if (musik.paused) {
        musik.play();
        tombol.innerHTML = "⏸️ Jeda Musik";
        tombol.style.background = "linear-gradient(45deg, #ff007f, #7928ca)";
    } else {
        musik.pause();
        tombol.innerHTML = "🎵 Putar Musik";
        tombol.style.background = "linear-gradient(45deg, #00dfd8, #0070f3)";
    }
}
