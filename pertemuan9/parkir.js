function hitungBiayaParkir() {
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir)

    //biaya 2 jam pertama
    let BiayaParkir = 3000
    lamaParkir -= 2

    // Hitung sisa jam
    if(lamaParkir > 0) {
        BiayaParkir = BiayaParkir + (lamaParkir * 1000)
    }

    console.log(BiayaParkir);
    // tampilkan hasil ke dalam html
    document.getElementById('biaya_parkir').innerHTML = '   : Rp.' + BiayaParkir;
}
