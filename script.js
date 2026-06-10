const display = document.getElementById("display");

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

document.getElementById("equal").addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});