
document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const numField = document.getElementById("number");
    const msgField = document.getElementById("message");

    nameField.addEventListener("input", () => {
        const errorMsg = document.getElementById("name-pattern-mismatch");
        if (nameField.validity.patternMismatch) {
            errorMsg.value = "(Special characters disallowed.)";
        }
        else { errorMsg.value = ""; }
    });

    numField.addEventListener("input", () => {
        if (numField.validity.patternMismatch) {
            const errorMsg = document.getElementById("num-pattern-mismatch");
            errorMsg.value = "(Only numbers allowed.)";
        }
    });

    emailField.addEventListener("blur", () => {
        if (emailField.validity.patternMismatch) {
        }
    });

    msgField.addEventListener("input", () => {
        if (msgField.validity.patternMismatch) {
        }
    })
    
});
