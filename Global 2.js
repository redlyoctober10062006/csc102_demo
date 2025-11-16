var trueOrfalse = false;

function boolOff()
{
    trueOrfalse = false;
    document.getElementById("showBool").innerHTML = "You chose false - bool = "+ trueOrfalse;
}

function boolOn()
{
    trueOrfalse = true
    document.getElementById("showBool").innerHTML = "You chose true - bool = "+ trueOrfalse;
}

function checkStatus()
{
    document.getElementById("showBool").innerHTML = "Check value of Bool = "+ trueOrfalse;
}

function changeWidth()
{
    var buttonBig = document.getElementById("changeWidth");
    buttonBig.style.width = 500 + "px";
    buttonBig.style.color = "red";
    buttonBig.style.backgroundColor = "blue";
}