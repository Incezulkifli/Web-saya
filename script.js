// Script untuk menangani form submit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit ke server
    alert("Pesan Anda telah dikirim! Terima kasih.");
});
// Script untuk animasi scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-read');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const description = document.getElementById(`desc-${targetId}`);
            
            // Toggle visibility of description
            if (description.classList.contains('desc-short')) {
                description.classList.remove('desc-short');
                description.classList.add('desc-full');
                button.textContent = "Baca Lebih Sedikit";
            } else {
                description.classList.remove('desc-full');
                description.classList.add('desc-short');
                button.textContent = "Baca Selengkapnya";
            }
        });
    });
});
    
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulir berhasil dikirim! Terima kasih telah mendaftar.");
        form.reset(); // Mengosongkan formulir setelah pengiriman
    });
});

// Fungsi yang menangani submit formulir
function handleSubmit(event) {
    event.preventDefault();  // Mencegah halaman di-reload saat form disubmit

    // Mendapatkan nilai dari input
    var nama = document.getElementById('nama').value;
    var jurusan = document.getElementById('jurusan').value;
    var alamat = document.getElementById('alamat').value;

    // Mengecek apakah semua data sudah diisi dengan benar
    if (nama === "" || jurusan === "" || alamat === "") {
        showMessage("Semua kolom harus diisi!", "error");
        return false;  // Tidak lanjutkan pendaftaran
    }

    // Logika untuk simulasi pendaftaran (misalnya cek database atau kirim ke server)
    // Di sini, kita hanya akan menampilkan pesan sukses jika data terisi dengan benar
    showMessage("Pendaftaran berhasil! Terima kasih telah mendaftar.", "success");

    // Mengosongkan form setelah berhasil
    document.getElementById('registration-form').reset();

    return false;  // Mencegah halaman di-reload
}

// Fungsi untuk menampilkan pesan keberhasilan atau kegagalan
function showMessage(message, type) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    
    // Menambahkan kelas berdasarkan jenis pesan
    if (type === "success") {
        messageDiv.className = "success";
    } else {
        messageDiv.className = "error";
    }
}
