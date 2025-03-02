const darkMode = "dark-mode";

const lightSwtich = document.getElementById("light-switch");
const expList = document.getElementsByTagName("job-exp");


if(localStorage.getItem("mode") == "dark") {
    lightSwtich.checked = false;
    document.body.classList.add(darkMode);
    for (let exp of expList) {
        exp.classList.add(darkMode);
    }
}

lightSwtich.addEventListener("change", () => {
    // Light mode
    if(lightSwtich.checked) {
        document.body.classList.remove(darkMode);
        for (let exp of expList) {
            exp.classList.remove(darkMode);
        }
        localStorage.setItem("mode", "light");
    }
    // Dark mode
    else {
        document.body.classList.add(darkMode);
        for (let exp of expList) {
            exp.classList.add(darkMode);
        }
        localStorage.setItem("mode", "dark");
    }
});