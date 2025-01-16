// ***************************************************************************
let form = document.getElementById("adoptionForm");
let choixChat = document.getElementById("choixChat");
let adoptionRaison = document.getElementById("adoptionRaison");
let messageValidation = document.getElementById("messageValidation");
let messageErreur = document.getElementById("MessageErreur");
let divArrea = document.querySelector(".div-arrea");
let divInput = document.querySelector(".div-input");
// Écouter l'événement de soumission du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Vérifier les conditions
  if (adoptionRaison.value.length >= 10 && choixChat.value !== "") {
    messageValidation.style.display = "block";
    form.style.display = "none";
  } else {
    // Afficher un message d'erreur personnalisé dans le textarea
    divArrea.classList.add("in-valid");
    divInput.classList.add("in-valid");
    adoptionRaison.placeholder = "Veuillez saisir au moins 10 caractères.";
  }
});

// Validation sur le choix du chat
choixChat.addEventListener("change", () => {
  if (choixChat.value === "") {
    divInput.classList.add("in-valid");
  } else {
    divInput.classList.add("valid"); // Ajouter une classe CSS pour indiquer que le champ est valide
  }
});

// Validation sur la raison de l'adoption
adoptionRaison.addEventListener("input", () => {
  if (adoptionRaison.value.length >= 10) {
    divArrea.classList.add("valid"); // Ajouter une classe CSS pour indiquer que le champ est valide
  } else {
    divArrea.classList.add("in-valid");
  }
});
