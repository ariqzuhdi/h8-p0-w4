function graduates(students) {
    if (students.length === 0) {
        return {}
    }

    var tampungKelas = []
    var hasil = {}
    for (var i = 0; i < students.length; i++) {
        if (tampungKelas.includes(students[i].class)) {

        }
        else {
            tampungKelas.push(students[i].class)
        }
        for (var g = 0; g < tampungKelas.length; g++) {
            var tampungan = tampungKelas[g]
            hasil[tampungan] = []
        }

        for (var key in hasil) {
            for (var k = 0; k < students.length; k++) {
                var studentClass = students[k].class
                var studentScore = students[k].score

                if (studentScore > 75) {
                    if (studentClass === key) {
                        hasil[key].push(students[k])
                    }
                }
            }
        }
    }
    for (var key in hasil) {
        for (var h = 0; h < hasil[key].length; h++) {
            delete hasil[key][h].class
        }
    }
    return hasil
}
console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}