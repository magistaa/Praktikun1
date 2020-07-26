function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('menghitung Sisi miring segitiga siku siku');
let a = window.prompt("Masukan Nilai alas: ");
let b = window.prompt("Masukan Nilai tinggi: ");

var c=hipotenusa(a,b);

console.log(`sisi miring = ${c}`);