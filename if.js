var x = 6;
var y = 8;
var z;

if(y===0){
    console.log('kesalahan:Nilai y tidak boleh nol ');
    process.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);