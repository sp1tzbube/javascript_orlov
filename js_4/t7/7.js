const trigger = document.querySelector("#trigger");
const target = document.querySelector("#target");

// mouse over -> show picB
trigger.addEventListener("mouseover", function () {
    target.src = "img/picB.jpg";
});

// mouse off -> back to the original picA
trigger.addEventListener("mouseout", function () {
    target.src = "img/picA.jpg";
});