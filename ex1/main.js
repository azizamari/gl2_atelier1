function genererNombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
  
function demanderNiveauDifficulte() {
let niveau = prompt("Choisissez un niveau de difficulté : Facile, Intermédiaire, Difficile");
switch (niveau.toLowerCase()) {
    case "facile":
    return { max: 10, tentatives: 10 };
    case "intermédiaire":
    return { max: 100, tentatives: 7 };
    case "difficile":
    return { max: 1000, tentatives: 5 };
    default:
    alert("Niveau non reconnu, difficulté par défaut : Facile");
    return { max: 10, tentatives: 10 };
}
}

function jouer() {
let { max, tentatives } = demanderNiveauDifficulte();
let nombreAleatoire = genererNombreAleatoire(max);
let nombreUtilisateur;
let essaisRestants = tentatives;

while (essaisRestants > 0) {
    nombreUtilisateur = prompt(`Devinez le nombre (entre 1 et ${max}). Tentatives restantes : ${essaisRestants}`);
    if (nombreUtilisateur == nombreAleatoire) {
    alert("Félicitations ! Vous avez trouvé le bon nombre !");
    break;
    } else if (nombreUtilisateur < nombreAleatoire) {
    alert("Le nombre caché est plus grand !");
    } else {
    alert("Le nombre caché est plus petit !");
    }
    essaisRestants--;
    if (essaisRestants === 0) {
    alert(`Dommage ! Vous avez utilisé toutes vos tentatives. Le nombre était : ${nombreAleatoire}`);
    }
}

if (confirm("Voulez-vous rejouer ?")) {
    jouer();
}
}

jouer();
