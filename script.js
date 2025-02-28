// Validation for patterns 

// Get all the contact-fields
const inputFields = document.querySelectorAll(".contact-field");

// Loop through each field 
inputFields.forEach(field => {
    field.addEventListener("input", () => {
        if (field.validity.patternMismatch) {
            console.log("Pattern Mismatch");
            alert("hi");
            let errorMsg = document.querySelector(".error-message");
            errorMsg.innerHTML = "error";
        }
    });
});