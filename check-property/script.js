
document.getElementById("button").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");

    if(myCheckBox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are NOT subscribed!");
    }

    if(visa.checked){
        console.log("You selected Visa as your payment moethod!");
    }
    else if(mastercard.checked){
        console.log("You selected MasterCard as your payment moethod!");
    }
    else if(paypal.checked){
        console.log("You selected PayPal as your payment moethod!");
    }
    else[
        console.log("You must select a payment method!")
    ]
}