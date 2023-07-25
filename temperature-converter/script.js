


document.getElementById("submit").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("text").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("result").innerHTML = temp + " C"
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("text").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("result").innerHTML = temp + " F"
    }
    else{
        document.getElementById("result").innerHTML = "Select a unit";
    }
}



function toCelcius(temp){
    temp = (temp - 32) * (5/9);
    temp = Math.floor(temp);
    return temp;
}

function toFahreinheit(temp){
    temp = temp * 9 / 5 + 32;
    temp = Math.floor(temp);
    return temp;
}


