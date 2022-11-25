var penumpang = ['Rakha', 'Putra', 'Ramadhan', 'Syahlan'];
var hapusPenumpang = function(namaPenumpang,penumpang){
        // jika angkot kosong
        if ( penumpang.length == 0 ) {
            // tampilkan bahwa angkot kosong
            console.log('Angkot Masih Kosong!')
            // kembalikan isi array & keluar dari function
            return penumpang;
        } else {
            // telusuri kursi dari awal
            for( var i = 0; i < penumpang.length; i++){
            // jika ada penumpang yang namanya sesuai
            if( penumpang[i] == namaPenumpang ){
                // hapus penumpang pada array dengan memberi nilai undifined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika tidak ada penumpang yang namanya sesuai, tampilkan pesan
             else {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Tidak ada didalam angkot. ')
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            }
        }
}
