function changeMe(arr) {
    var abc = []
    for(var i = 0; i < arr.length; i++){
        var person = {
            firstname: arr[i][0],
            lastname: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3]
        }
        if(arr[i][3] === undefined){
            person.age = 'Invalid Birth Year'
        }
        console.log(person)}
    }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""