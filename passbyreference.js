function increment(a){
    a.x +=1;
}

// membuat objek
let obj = new Object();
//mendefinisikan properti x pada objek yang telah dibuat
obj.x=10;

//menampilkan nilai obj.x sebelim dinaikan
console.log('Sebelum dinaikan nilainya: ');
console.log(`obj.x: ${obj.x}`);

//memanggil fungsi increment
increment(obj);

//memanggil nilai obj.x setelah dinaikan
console.log('Sebelum dinaikan nilainya: ');
console.log(`obj.x: ${obj.x}`);
