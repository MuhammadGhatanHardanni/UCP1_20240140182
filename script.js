let dataAnggota = [
  { nama: "Ghatan", email: "Ghatan@mail.com", minat: "Programmer Handal" },
  { nama: "Jehan", email: "Jehan@mail.com", minat: "Cyber Ambatukan" },
  { nama: "Aryya", email: "Aryya@mail.com", minat: "King MRC" },
];

let tabel = document.getElementById("tabelAnggota");

if (tabel !== null) {
  for (let i = 0; i < dataAnggota.length; i++) {
    tabel.innerHTML +=
      "<tr>" +
      "<td>" +
      dataAnggota[i].nama +
      "</td>" +
      "<td>" +
      dataAnggota[i].email +
      "</td>" +
      "<td>" +
      dataAnggota[i].minat +
      "</td>" +
      "</tr>";
  }
}

let formPendaftaran = document.getElementById("formDaftar");

if (formPendaftaran !== null) {
  formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();

    let namaDiinput = document.getElementById("nama").value;
    let emailDiinput = document.getElementById("email").value;
    let minatDiinput = document.getElementById("minat").value;

    dataAnggota.push({
      nama: namaDiinput,
      email: emailDiinput,
      minat: minatDiinput,
    });

    alert(
      "Pendaftaran Sukses!\nNama: " + namaDiinput + "\nMinat: " + minatDiinput,
    );

    document.getElementById("hasilInput").innerHTML =
      "Data " + namaDiinput + " berhasil disimpan!";

    formPendaftaran.reset();
  });
}


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
