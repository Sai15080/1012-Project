function theQuestion() {

    var theSchool = document.getElementById("schoolQuestion").value;
    var theMascot = document.getElementById("mascotQuestion").value;
    var theLecture = document.getElementById("lectureQuestion").value;

    if (theSchool !== "York" || theMascot !== "Lions" || theLecture !== "William Small Center") {
        
        document.getElementById("demo").innerHTML = "One or More of these Answers are Incorrect";

    } else {

        var newPassword = prompt("What Would You Like Your New Password to Be: ");
        var secondTime = prompt("Please Type in Your new Password Again: ");

        if (newPassword !== secondTime) {

            alert("Your Passwords do not Match");
            var newPassword = prompt("What Would You Like Your New Password to Be: ");
            var secondTime = prompt("Please Type in Your new Password Again: ");

        }
            alert("Congratulations, Your new Password is Now Set!");
            var savePassword = prompt("Would You Like to Save Your Password: ");

            if (savePassword === "Yes" || savePassword === "yes" || savePassword === "YES") {
                alert("Perfect, Your Password is now Saved!");
            } else {
                alert("Great You are Set to Continue! Please Remember Your Password!");
            }
            
            window.location.href = "https://www.yorku.ca/";
        }
    }
