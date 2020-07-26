function kali(a,b){
    return a*b;
}
let a =window.prompt('masukan nilai A :');
let b =window.prompt('masukan nilai B :');
let c;
//memanggil fungsi dan menampungnya ke c
c=kali(a,b);

console.log(`${a}x${b}=${c}`);