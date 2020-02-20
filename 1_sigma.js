// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)

function sigma(num){
    var sum = 0;
    for(var i=0; i<=num; i++){
        sum=sum+i;
    }
    return sum;
}   
var sum = sigma(5);
var fr = sigma(10);
var rf = sigma(1);
var hg = sigma(0);
var gh = sigma(-10);
console.log(sum, fr, rf, hg, gh);
console.log("Adding up");
