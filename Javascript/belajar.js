function cetakAngka() {
    for (let i = 1; i <= 5; i++) { // Menggunakan let agar i menjadi block-scoped untuk setiap iterasi
        const waktu = i * 1000; // Menggunakan const karena waktu tidak akan berubah setelah ditentukan
        setTimeout(function () {
            console.log(i); // Akan mencetak nilai i yang sesuai untuk setiap iterasi
        }, waktu);
    }
}

cetakAngka();

/* 
1) let i pada for loop: let digunakan untuk variabel i agar menjadi block-scoped, sehingga pada setiap iterasi nilai i tetap unik dalam ruang lingkup blok for. Ini memastikan setiap fungsi setTimeout menerima nilai i yang benar saat dieksekusi.
2) const waktu: waktu dideklarasikan dengan const karena nilai waktu ditentukan berdasarkan nilai i pada iterasi tersebut dan tidak akan berubah selama eksekusi fungsi setTimeout.
*/