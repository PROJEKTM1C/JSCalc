// MY LOGIC HERE

function but1(){
    document.getElementById("btn").value += '1';
}

function but2(){
    document.getElementById("btn").value += '2';
}

function but3(){
    document.getElementById("btn").value += '3';
}

function but4(){
    document.getElementById("btn").value += '4';
}

function but5(){
    document.getElementById("btn").value += '5';
}

function but6(){
    document.getElementById("btn").value += '6';
}

function but7(){
    document.getElementById("btn").value += '7';
}

function but8(){
    document.getElementById("btn").value += '8';
}

function but9(){
    document.getElementById("btn").value += '9';
}

function but0(){
    document.getElementById("btn").value += '0';
}

function butadd(){
    document.getElementById("btn").value += "+";
}

function butsub(){
    document.getElementById("btn").value += '-';
}

function butmul(){
    document.getElementById("btn").value += '*';
}

function butdiv(){
    document.getElementById("btn").value += '/';
}

function butdot(){
    document.getElementById("btn").value += '.';
}


function butclear(){
    document.getElementById("btn").value = null;
}

function butequ(){
    if (document.getElementById("btn").value != null){

    document.getElementById("btn").value = eval(document.getElementById("btn").value);
    }

    else if (document.getElementById("btn").value != undefined ){
        document.getElementById("btn").value = "enter value first";
    }
}