const form = document.querySelector("#source");
const target = document.querySelector("#target");

form.addEventListener("submit", function (event) {
    // stop the default action (page reload)
    event.preventDefault();

    // attribute selectors to find the inputs
    const firstname = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;

    target.textContent = "Your name is " + firstname + " " + lastname;
});