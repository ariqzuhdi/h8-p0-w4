function digitPerkalianMinimum(angka) {
    var perkalian = 0
    var str = ''
    var strFactor = []
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            var tes = i + '-' + j
            perkalian = i * j
            if (perkalian === angka) {
                str = String(i) + String(j)
                strFactor.push(str)
            var slice = strFactor.slice(Math.round(strFactor.length /2 - 1), Math.round(strFactor.length/2))
            var hasil = slice[0]
            }
        }
    }
return hasil.length}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2