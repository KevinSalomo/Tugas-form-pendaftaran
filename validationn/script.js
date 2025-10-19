const display = document.getElementById("display");
const error = document.getElementById("error");

// Menambahkan angka/operator ke display
function appendValue(value) {
  error.textContent = "";
  display.value += value;
}

// Menghapus semua isi display
function clearDisplay() {
  display.value = "";
  error.textContent = "";
}

// Menghapus satu karakter terakhir
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Menghitung hasil ekspresi
function calculate() {
  try {
    const expression = display.value;

    // Cegah pembagian dengan nol
    if (expression.includes("/0")) {
      error.textContent = "Tidak bisa membagi dengan nol!";
      return;
    }

    // Validasi input kosong
    if (expression.trim() === "") {
      error.textContent = "Masukkan angka terlebih dahulu!";
      return;
    }

    const result = eval(expression); // menghitung hasil
    display.value = result;
  } catch (e) {
    error.textContent = "Input tidak valid!";
  }
}