var jmlAngkot = 10;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= 6 && noAngkot !== 5){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' Sedang lembur.')
    } else{
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.')
    }
}