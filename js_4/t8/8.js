const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operation = document.querySelector("#operation");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");

startButton.addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);

    // check that both fields contain numbers
    if (num1.value === "" || num2.value === "" || isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter two numbers";
        return;
    }

    let answer;

    // use the value attribute of the selected <option>
    if (operation.value === "add") {
        answer = a + b;
    } else if (operation.value === "sub") {
        answer = a - b;
    } else if (operation.value === "multi") {
        answer = a * b;
    } else if (operation.value === "div") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
});