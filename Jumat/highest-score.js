function highestScore(students) {
  if (students.length === 0) {
    return {}
  }
  var listKelas = []
  var hasil = {}
  for (var i = 0; i < students.length; i++) {
    if (listKelas.includes(students[i].class)) {
      continue;
    } else {
      listKelas.push(students[i].class)

    }
  }

  for (var j = 0; j < listKelas.length; j++) {
    var tampung = {}
    var nilai = 0
    for (var k = 0; k < students.length; k++) {
      if (nilai < students[k].score && listKelas[j] === students[k].class) {
        nilai = students[k].score
        tampung.name = students[k].name
        tampung.score = nilai
      }
      hasil[listKelas[j]] = tampung
    }
  }
  return hasil

}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}