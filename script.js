let captchChecked = false;
function beforesubmit(event){
    if(captchChecked){
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log("Input date value =>",inputdate.value);

        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        console.log("formattedDate =>",formattedDate);
        outputdate.value = formattedDate;
        console.log("outputdate.value =>",outputdate.value);
    } else {
        alert ("Please check reCAPTCH box to submit the lead.");
        event.preventdefault();
    }    
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
    {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

function captchasuccess(){
    captchChecked = true;
}