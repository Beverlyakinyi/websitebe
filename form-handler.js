document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    alert("Thank you for your order! Bee will contact you shortly.");
    form.reset(); // Clear the form fields
  });
});
