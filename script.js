
document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const numField = document.getElementById("number");
    const msgField = document.getElementById("message");

    nameField.addEventListener("input", () => {
        const errorMsg = document.getElementById("name-pattern-mismatch");
        if (nameField.validity.patternMismatch) {
            //Flash
            setTimeout(() => {
                nameField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            }, 100);
            setTimeout(() => {
                nameField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
            }, 100);
            nameField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            
            // Display error msg
            errorMsg.value = "(Special characters disallowed.)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
        else {
            nameField.style.backgroundColor = "white";
        }
    });

    numField.addEventListener("input", () => {
        const errorMsg = document.getElementById("num-pattern-mismatch");
        if (numField.validity.patternMismatch) {
            //Flash
            setTimeout(() => {
                numField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            }, 100);
            setTimeout(() => {
                numField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
            }, 100);
            numField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";

            // Display error msg
            errorMsg.value = "(Only numbers allowed.)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
        else {
            numField.style.backgroundColor = "white";
        }
    });

    emailField.addEventListener("blur", () => {
        const errorMsg = document.getElementById("email-pattern-mismatch");
        if (emailField.validity.patternMismatch) {
            //Flash
            setTimeout(() => {
                emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            }, 100);
            setTimeout(() => {
                emailField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
            }, 100);
            emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";

            // Display error msg
            errorMsg.value = "(Not a valid email)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
        else {
            emailField.style.backgroundColor = "white";
        }
    });

    msgField.addEventListener("input", () => {
        const errorMsg = document.getElementById("message-error");
        if (msgField.validity.patternMismatch) {
            //Flash
            setTimeout(() => {
                msgField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            }, 100);
            setTimeout(() => {
                msgField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
            }, 100);
            msgField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
            
            // Display error msg
            errorMsg.value = "(Special characters disallowed.)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
    })
    
});
