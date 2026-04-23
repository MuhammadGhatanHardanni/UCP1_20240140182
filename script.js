let dataAnggota = [
  { nama: "Ghatan", email: "Ghatan@mail.com", minat: "Programmer Handal" },
  { nama: "Jehan", email: "Jehan@mail.com", minat: "Cyber Ambatukan" },
  { nama: "Aryya", email: "Aryya@mail.com", minat: "King MRC" },
];




function gantiGambar() {
  let gambar = document.getElementById("gambar");
  gambar.src =
    "mbappe.jpg";
  alert("Gambar berhasil diubah!");
}

function mainkanAudio() {
  let audio = document.getElementById("Siuuu");
  audio.play();
}

function stopAudio() {
  let audio = document.getElementById("Siuuu");
  audio.pause();
}
