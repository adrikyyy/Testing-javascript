// Fungsi fetchData yang menggunakan Promise agar dapat di-await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve({ data: 'Some data' });
        }, 2000);
    });
}

// Fungsi processData yang juga diubah menjadi Promise agar dapat di-await
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing data:', data);
            resolve(`Processed: ${data.data}`);
        }, 2000);
    });
}

// Fungsi saveData yang diubah menjadi Promise agar dapat di-await
function saveData(processedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data saved:', processedData);
            resolve('Success');
        }, 2000);
    });
}

// Fungsi utama yang menggunakan async/await untuk menjalankan ketiga fungsi di atas
async function main() {
    try {
        const fetchedData = await fetchData(); // Menunggu fetchData selesai sebelum lanjut ke step berikutnya
        const processedData = await processData(fetchedData); // Menunggu processData selesai
        const result = await saveData(processedData); // Menunggu saveData selesai
        console.log('All operations completed:', result);
    } catch (error) {
        console.error('Error:', error); // Menangani error yang mungkin terjadi pada setiap step
    }
}

main(); // Memanggil fungsi utama untuk mengeksekusi seluruh proses

/*
1) Mengubah fungsi fetchData, processData, dan saveData ke Promise:
    - Menggunakan Promise untuk mengubah fungsi callback menjadi fungsi yang bisa di-await.
    - Setiap fungsi me-resolve hasil jika sukses dan bisa me-reject jika ada kesalahan, membuat penanganan error lebih sederhana.
2) Membuat fungsi main sebagai fungsi async:
    - Kode utama dipindahkan ke fungsi main yang dideklarasikan dengan kata kunci async, sehingga kita dapat menggunakan await untuk setiap langkah.
    - Setiap langkah dapat dieksekusi satu per satu dalam urutan yang lebih jelas, mirip dengan cara kita membaca alur logika.
3) Error Handling yang lebih sederhana:
    - Menggunakan try...catch di main untuk menangkap semua error yang mungkin muncul di setiap tahapan, menggantikan banyak if-statements pada callback.
    - Menjadikan alur logika lebih mudah diikuti dan fokus pada tugas utamanya daripada error handling pada setiap langkah.*/