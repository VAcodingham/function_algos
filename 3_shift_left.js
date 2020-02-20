// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]=arr[i+1];
    
    }
    arr.pop();
    arr.push(0);
    return(arr);
}

var resultArr = shiftLeft([1,2,3,4,5]);
var resultArr1 = shiftLeft(["hello","hi","yo","wazzup"])
var resultArr2 = shiftLeft([1,2]);
var resultArr3 = shiftLeft([1]);
var resultArr4 = shiftLeft([]);
console.log(resultArr, resultArr1, resultArr2, resultArr3, resultArr4);

// shiftLeft([1,-7,2,-5,8,7,-11,10])        //Expected output: [-7,2,-5,8,7,-11,10,0]
// shiftLeft(["hello","hi","yo","wazzup"])  //Expected output: [hi","yo","wazzup",0]
// shiftLeft([1,2])                         //Expected output: [2,0]
// shiftLeft([1])                           //Expected output: [0]
// shiftLeft([])                            //Expected output: []