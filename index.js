const app = document.getElementById("app"); // ambil element dengan id app
const header = document.createElement("h1"); // buat element h1
const headerContent = document.createTextNode("Belajar React bareng WPU"); // buat text node

header.appendChild(headerContent); // tambahkan text node ke element h1
app.appendChild(header); // tambahkan element h1 ke element dengan id app