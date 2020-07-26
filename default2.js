function cetak(s,n=3,newline=true){
    for(let i=0;i<n;i++){
        console.log(s);
        if(newline)console.log(`\n`);
    }
}

//memanggil fungsi cetak() dengan satu parameter
console.log('memanggil fungsi dengan satu parameter:');
cetak('RPL');

//memanggil fungsi cetak() dengan satu parameter
console.log('memanggil fungsi dengan 2 parameter:');

cetak('RPL',2);
//memanggil fungsi cetak() dengan satu parameter
console.log('memanggil fungsi dengan 3 parameter:');
cetak('RPL',1,true);
cetak('TKJ',1,true);