const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah reload halaman
  let valid = true;

  // Ambil elemen
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const umur = document.getElementById("umur");
  const password = document.getElementById("password");
  const successMessage = document.getElementById("successMessage");

  // Reset pesan error
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMessage.textContent = "";

  // Validasi Nama
  if (nama.value.trim() === "") {
    document.getElementById("namaError").textContent = "Nama wajib diisi.";
    valid = false;
  }

  // Validasi Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent = "Format email tidak valid.";
    valid = false;
  }

  // Validasi Umur
  if (umur.value === "" || umur.value <= 0) {
    document.getElementById("umurError").textContent = "Masukkan umur yang valid.";
    valid = false;
  }

  // Validasi Password
  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Minimal 6 karakter.";
    valid = false;
  }

  // Jika semua valid
  if (valid) {
    successMessage.textContent = "Form berhasil dikirim!";
    form.reset();
  }
});

// Validasi real-time
form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.nextElementSibling.textContent = "";
    }
  });
});