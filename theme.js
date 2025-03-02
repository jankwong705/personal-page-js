const lightSwtich = document.getElementById("light-switch");

if(localStorage.getItem("mode") == "dark") {
    document.body.classList.add("dark-mode");
    lightSwtich.checked = false;
}

lightSwtich.addEventListener("change", () => {
    // Light mode
    if(lightSwtich.checked) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
    }
    // Dark mode
    else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark");
    }
});