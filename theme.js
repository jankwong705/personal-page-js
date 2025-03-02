const lightSwtich = document.getElementById("light-switch");

lightSwtich.addEventListener("change", () => {
    // Light mode
    if(lightSwtich.checked) {
        localStorage.setItem("mode", "light");
    }
    // Dark mode
    else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark");
    }
});