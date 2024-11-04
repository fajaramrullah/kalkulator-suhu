function konversiSuhu() {
  const suhuInput = parseFloat(document.getElementById("inputSuhu").value);
  const unitAsal = document.getElementById("unitAsal").value;
  let hasil = "";

  if (!isNaN(suhuInput)) {
    if (unitAsal === "Celsius") {
      const fahrenheit = (suhuInput * 9) / 5 + 32;
      const kelvin = suhuInput + 273.15;
      hasil = `${suhuInput} °C = ${fahrenheit.toFixed(2)} °F, ${kelvin.toFixed(
        2
      )} K`;
    } else if (unitAsal === "Fahrenheit") {
      const celsius = ((suhuInput - 32) * 5) / 9;
      const kelvin = celsius + 273.15;
      hasil = `${suhuInput} °F = ${celsius.toFixed(2)} °C, ${kelvin.toFixed(
        2
      )} K`;
    } else if (unitAsal === "Kelvin") {
      const celsius = suhuInput - 273.15;
      const fahrenheit = (celsius * 9) / 5 + 32;
      hasil = `${suhuInput} K = ${celsius.toFixed(2)} °C, ${fahrenheit.toFixed(
        2
      )} °F`;
    }
  } else {
    hasil = "Masukkan suhu yang valid";
  }

  document.getElementById("hasilKonversi").innerText = hasil;
}

function simpanRiwayat() {
  const hasil = document.getElementById("hasilKonversi").innerText;
  if (hasil) {
    const riwayatList = document.getElementById("riwayatKonversi");
    const riwayatItem = document.createElement("li");
    riwayatItem.textContent = hasil;
    riwayatList.appendChild(riwayatItem);
  } else {
    alert("Tidak ada hasil konversi untuk disimpan.");
  }
}
