document.addEventListener("DOMContentLoaded", function () {
  var imageModal = document.getElementById("imageModal");

  imageModal.addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget; // Element that triggered the modal

    var title = button.getAttribute("data-title");
    var text = button.getAttribute("data-text");
    var imageSrc = button.getAttribute("src");

    var modalTitle = imageModal.querySelector(".modal-title");
    var modalImage = imageModal.querySelector("#modalImage");
    var modalText = imageModal.querySelector("#modalText");

    if (modalTitle) {
      modalTitle.textContent = title;
    }

    if (modalImage) {
      modalImage.src = imageSrc;
    }

    if (modalText) {
      modalText.textContent = text;
    }
  });
});
