function urutkanAbjad(str) {
  var huruf = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''
  for (var i = 0; i < huruf.length; i++) {
    for(var j = 0; j < str.length; j++){
      if(huruf[i] === str[j]){
        hasil += huruf[i]
      }
    }
  }
  return hasil}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'