function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input date value =>",inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("formattedDate =>",formattedDate);
    outputdate.value = formattedDate;
    console.log("outputdate.value =>",outputdate.value);
}