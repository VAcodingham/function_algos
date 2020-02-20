// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    
    }   return count;

}
var result = greaterThanY([1,6,8,3,5,2], 4);
var result1 = greaterThanY([5,6,7,8,9,10], 4);
var result2 = greaterThanY([5,6,7,8,9,10], 12);
var result3 = greaterThanY([1,6,8,3,5,2], -5);
var result4 = greaterThanY([-2,-6,-8,-3,-5,-2], -4);
var result5 = greaterThanY([], 5);
console.log(result, result1, result2, result3, result4, result5);

// greaterThanY([5,6,7,8,9,10], 4)          //Expected output: 6
// greaterThanY([5,6,7,8,9,10], 12)         //Expected output: 0
// greaterThanY([1,6,8,3,5,2], -5)          //Expected output: 0
// greaterThanY([-2,-6,-8,-3,-5,-2], -4)    //Expected output: 3
// greaterThanY([], 5)                      //Expected output: 0
