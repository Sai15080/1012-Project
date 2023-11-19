function checkPassword() {
    
    var thePassword = document.getElementById("password").value;
    
    if (thePassword == "qz489trfZWwsi6d") {

         window.location.href = "https://www.yorku.ca/";

    }
    
    else {

        document.getElementById("demo").innerHTML = "Incorrect! Please Try Again";
       
    }
}
