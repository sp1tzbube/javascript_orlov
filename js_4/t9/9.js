// Task 9 – calculator with one text field (no eval)
const calculation = document.querySelector("#calculation");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");

startButton.addEventListener("click", function () {
    // remove spaces, e.g. "3 + 5" -> "3+5"
    const text = calculation.value.replaceAll(" ", "");

    let operator;

    // find out which operator the user wrote
    if (text.includes("+")) {
        operator = "+";
    } else if (text.includes("-")) {
        operator = "-";
    } else if (text.includes("*")) {
        operator = "*";
    } else if (text.includes("/")) {
        operator = "/";
    } else {
        result.textContent = "Use +, -, * or /";
        return;
    }

    // split the text into two numbers, e.g. "3+5" -> ["3", "5"]
    const parts = text.split(operator);

    if (parts.length !== 2 || parts[0] === "" || parts[1] === "") {
        result.textContent = "Invalid calculation";
        return;
    }

    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);

    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Invalid numbers";
        return;
    }

    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = text + " = " + answer;
});