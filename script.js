document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = this.nama.value;
  const wa = this.wa.value;
  const alamat = this.alamat.value;
  const layanan = this.layanan.value;

  const pesan = `Halo, saya ${nama}. Saya ingin pesan layanan ${layanan}.%0AAlamat: ${alamat}%0ANo. HP: ${wa}`;
  const nomorWA = "6285871924709"; // Ganti dengan nomor WA kamu (gunakan format internasional tanpa +)

  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
});
