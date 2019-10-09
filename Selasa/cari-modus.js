function cariModus(arr) {
    arr.sort(function (value1, value2) { return (value1 > value2) })
    var tampung = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            tampung.push(arr[i])
        }
    }
    if (tampung[0] === undefined) {
        return -1
    } else if (arr.length - 1 === tampung.length){
        return -1
    }
        return tampung[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1