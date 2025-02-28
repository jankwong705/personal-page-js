
document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const numField = document.getElementById("number");
    const msgField = document.getElementById("message");

    nameField.addEventListener("input", () => {
        const errorMsg = document.getElementById("name-pattern-mismatch");
        if (nameField.validity.patternMismatch) {
            // Flash field 
            

            // Display error msg
            errorMsg.value = "(Special characters disallowed.)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
    });

    numField.addEventListener("input", () => {
        const errorMsg = document.getElementById("num-pattern-mismatch");
        if (numField.validity.patternMismatch) {
            //Flash
            

            // Display error msg
            errorMsg.value = "(Only numbers allowed.)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
    });

    emailField.addEventListener("blur", () => {
        const errorMsg = document.getElementById("email-pattern-mismatch");
        if (emailField.validity.patternMismatch) {
            
            // Display error msg
            errorMsg.value = "(Not a valid email)";
            errorMsg.style.opacity = "1";
            // Fade
            setTimeout(() => {
                errorMsg.style.transition = "opacity 1s ease-out";
                errorMsg.style.opacity = "0";
            }, 2000);
        }
    });

    msgField.addEventListener("input", () => {
        const errorMsg = document.getElementById("message-error");
        if (msgField.validity.patternMismatch) {
            
            errorMsg.value = "(Special characters disallowed.)";
        }
        errorMsg.style.opacity = "1";
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);
    })
    
});
