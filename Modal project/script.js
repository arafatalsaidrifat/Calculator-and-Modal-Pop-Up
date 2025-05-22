document.addEventListener("DOMContentLoaded", function () {
  // Correctly selecting elements by ID
  let openModalBTN = document.querySelector('#openModalBTN');
  let closeModalBTN = document.querySelector('#closeModalBTN');
  let modal = document.querySelector('#myModal');

  // Open modal
  openModalBTN.addEventListener('click', function () {
    modal.style.display = "block";
  });

  // Close modal
  closeModalBTN.addEventListener('click', function () {
    modal.style.display = "none";
  });

  // Close modal if clicking outside the content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
