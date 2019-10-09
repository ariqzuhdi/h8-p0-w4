function ubahHuruf(kata) {
var abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var hasil = ''
    for(var i = 0; i < kata.length; i++){
        var huruf = abjad.indexOf(kata[i])
        var ubahPosisi = huruf + 1
        var hurufBaru = abjad[ubahPosisi]
        hasil += hurufBaru
    }
return hasil}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu