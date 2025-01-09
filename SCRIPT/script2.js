  // Form submission handler
    document.getElementById('adoptionForm').addEventListener('submit', function (e) {
      e.preventDefault();
      let chat = document.getElementById('catChoice').value;
      let raisons = document.getElementById('adoptionReason').value;

      if (chat && raisons) {
        alert(`Vous avez choisi d'adopter ${chat} pour la raison suivante : ${raisons}`);
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    });