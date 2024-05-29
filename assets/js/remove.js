var eliminarBotones = document.querySelectorAll(".eliminar-imagen");

eliminarBotones.forEach((button) => {
  button.addEventListener("click", function () {
    var parentCol = button.parentElement;
    parentCol.remove();
  });
});
