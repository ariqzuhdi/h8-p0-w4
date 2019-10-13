function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var biaya = 2000
    var hasil = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: biaya * (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))
        }
        hasil.push(object)
    }
    return hasil
}




//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]