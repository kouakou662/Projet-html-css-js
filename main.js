function changerCouleur() {
  // Change la couleur de fond de la section accueil
  const accueil = document.getElementById("accueil");
  accueil.style.backgroundColor = "#ecf0f1";
  accueil.style.color = "#2c3e50";

  // Change le texte du bouton
  const bouton = document.querySelector("button");
  bouton.textContent = "Style changé ✔️";
}

