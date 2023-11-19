function checkPassword() {
    
    var thePassword = document.getElementById("password").value;
    
    if (thePassword !== "qz489trfZWwsi6d") {

        document.getElementById("demo").innerHTML = "Incorrect! Please Try Again";

    } else {

        window.location.href = "https://www.yorku.ca/";
    }
}
