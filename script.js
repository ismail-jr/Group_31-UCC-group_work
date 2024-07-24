document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const contact = document.getElementById("contactForm");
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  const successModalContact = new bootstrap.Modal(
    document.getElementById("successModalContact")
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check form validity
    if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      // Show success modal
      successModal.show();

      // Reset form
      form.reset();
      form.classList.remove("was-validated");
    }
  });

  contact.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check form validity
    if (contact.checkValidity() === false) {
      event.stopPropagation();
      contact.classList.add("was-validated");
    } else {
      // Show success modal
      successModalContact.show();

      // Reset form
      contact.reset();
      contact.classList.remove("was-validated");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenImages = document.getElementById("hiddenImages");

  showMoreBtn.addEventListener("click", () => {
    // Show hidden images
    hiddenImages.style.display = "block";
    // Hide the button after clicking
    showMoreBtn.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleGalleryBtn = document.getElementById("toggleGalleryBtn");
  const hiddenImages = document.getElementById("hiddenImages");

  toggleGalleryBtn.addEventListener("click", () => {
    if (hiddenImages.style.display === "none") {
      hiddenImages.style.display = "block";
      toggleGalleryBtn.textContent = "Show Less";
    } else {
      hiddenImages.style.display = "none";
      toggleGalleryBtn.textContent = "Show More";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");
  const successText = document.getElementById("successText");
  const modalTitle = document.getElementById("modalTitle");

  // Show registration form
  document.getElementById("showRegister").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    successMessage.style.display = "none";
    modalTitle.textContent = "Register"; // Update modal title
  });

  // Show login form
  document.getElementById("showLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    successMessage.style.display = "none";
    modalTitle.textContent = "Login"; // Update modal title
  });

  // Handle login form submission
  document
    .getElementById("loginFormContent")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      successMessage.style.display = "block";
      successText.textContent = "Successfully logged in!";
    });

  // Handle registration form submission
  document
    .getElementById("registerFormContent")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      successMessage.style.display = "block";
      successText.textContent = "Successfully registered!";
    });
});
function initMap() {
  // Define the location for the University of Cape Coast
  const uccLocation = { lat: 5.104, lng: -1.2251 };

  // Create a new map centered at the University of Cape Coast
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, // Adjust the zoom level as needed
    center: uccLocation,
  });

  // Add a marker at the University of Cape Coast
  const marker = new google.maps.Marker({
    position: uccLocation,
    map: map,
    title: "University of Cape Coast", // Optional title for the marker
  });
}

// Load the map when the window is loaded
window.onload = initMap;
