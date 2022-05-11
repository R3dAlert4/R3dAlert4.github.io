var s = 1;
//var n = 777777; //this is the starting number, change to a number of your choice
var fCounter = 0;
var repeat = 1;
var i = 0


window.onload = function(){ 
    document.getElementById("submit").onclick = function(){
        calculate();
    } 
};



function calculate(){
    //var n = window.prompt('Input any whole number');
    var n = document.getElementById("getValue").value;
    console.log(n);
    while (repeat === 1){
        while (fCounter != 2){
            if (n % 2 === 0){
                n = n / 2;
            } else {
                n = n * 3 + 1; 
            }
            if (n === 4){
                fCounter += 1;
            }
            i += 1;
            console.log(n);
            //document.write(n + "<br />");
            document.write('<p id="jstext">' + n + '</p>')
        }
        "<br />"
        console.log('It took', i, 'iterations to get stuck in the loop.')
        document.write('It took ', i, ' iterations to get stuck in the loop.' + "<br />");
        repeat = 0; //set this equal to 1 if you want the script to run forever
        s += 1;
        n = s;
    }
}
