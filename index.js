function checkPassword() {

    var storedPassword = localStorage.getItem('userPassword');
    var tempPassword = "qz489trfZWwsi6d";

    var thePassword = document.getElementById("password").value;

    if (thePassword === storedPassword || thePassword === tempPassword) {
        window.location.href = "mainPage";
    } else {
        document.getElementById("demo").innerHTML = "Incorrect! Please Try Again";
    }
}

function theQuestion() {

    var theSchool = document.getElementById("schoolQuestion").value;
    var theMascot = document.getElementById("mascotQuestion").value;
    var theLecture = document.getElementById("lectureQuestion").value;

    if (theSchool !== "York" || theMascot !== "Lions" || theLecture !== "William Small Center") {
        document.getElementById("demo").innerHTML = "One or More of these Answers are Incorrect";
    } else {
        resetPassword();
    }

}

function resetPassword() {

    var newPassword = prompt("What Would You Like Your New Password to Be: ");
    var secondTime = prompt("Please Type in Your New Password Again: ");

    while (newPassword !== secondTime) {
        alert("Your Passwords do not Match");
        newPassword = prompt("What Would You Like Your New Password to Be: ");
        secondTime = prompt("Please Type in Your New Password Again: ");
    }

    
    localStorage.setItem('userPassword', newPassword);

    alert("Congratulations, Your New Password is Now Set!");

    var savePassword = prompt("Would You Like to Save Your Password: ");
    if (savePassword.toLowerCase() === "yes") {
        alert("Perfect, Your Password is now Saved!");
    } else {
        alert("Great! You are Set to Continue! Please Remember Your Password!");
    }

    window.location.href = "index.html";
    
}

