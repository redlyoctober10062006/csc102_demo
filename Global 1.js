// declare global variable above all functions
var bestNum = 42;

function checkNum()
{
    document.getElementById("check").innerHTML = "The special number is" + bestNum;
}
function updateNum()
{
    bestNum++; //bestNum = bestNum + 1;
    document.getElementById("check").innerHTML = "The special number is" + bestNum;
}
//is is a 1 line comment
// goes to the end of the line
/*this is multiline comment all text in comments is green*/