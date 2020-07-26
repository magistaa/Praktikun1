let siswa = [
    ['1','adi','malang'],
    ['2','budi','sidoarjo'],
    ['3','dea','surabaya'],
];

console.log('No \t Nama Siswa \t Asal');
console.log('--- \t ------- \t ----');
for(let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        console.log(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            console.log(' \t ');
        }
    
    }
    console.log();
}