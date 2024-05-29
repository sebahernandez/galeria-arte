document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const messageInput = document.getElementById("message");
  const requestTypeInput = document.getElementById("requestType");
  const formFeedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formFeedback.innerHTML = "";

    if (validateForm()) {
      updateRequestType();
      displaySuccessMessage();
    } else {
      displayErrorMessage();
    }
  });

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    return name !== "" && email !== "" && message !== "";
  }

  function updateRequestType() {
    const messageText = messageInput.value.toLowerCase();

    if (messageText.includes("compra")) {
      requestTypeInput.value = "Compra";
    } else if (messageText.includes("venta")) {
      requestTypeInput.value = "Venta";
    }
  }

  function displaySuccessMessage() {
    formFeedback.innerHTML =
      '<div class="alert alert-success">Éxito: El formulario pasó todas las validaciones.</div>';
  }

  function displayErrorMessage() {
    formFeedback.innerHTML =
      '<div class="alert alert-danger">Error: Algún campo no pasó las validaciones.</div>';
  }
});
