// ***************************************************************************
let form = document.getElementById("adoptionForm");
let choixChat = document.getElementById("choixChat");
let adoptionRaison = document.getElementById("adoptionRaison");
let messageValidation = document.getElementById("messageValidation");
let messageErreur = document.getElementById("MessageErreur");

// Écouter l'événement de soumission du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Vérifier les conditions
  if (adoptionRaison.value.length >= 10 && choixChat.value !== "") {
    messageErreur.style.display = "none";
    messageValidation.style.display = "block";
    form.style.display = "none";
  } else {
    // Afficher un message d'erreur personnalisé dans le textarea
    adoptionRaison.classList.add("is-invalid");
    adoptionRaison.setCustomValidity("Veuillez saisir au moins 10 caractères.");
  }
});
