// Charger les citations depuis le fichier quotes.js
import { qoutes } from './quotes.js';

// Sélectionner l'élément dans lequel afficher les citations
const quotesContainer = document.getElementById('qoutesContainer');

// Charger les favoris depuis le localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 
// Fonction pour afficher toutes les citations
function displayQuotes(){

    if (!qoutes || qoutes.length === 0){
        console.error("Aucune citation n'a pas été trouvée.");
        return;
    }

    quotesContainer.innerHTML = ''; // Vider le conteneur de citations
    qoutes.forEach(qoute => {
        
        // Créer un élément pour chaque citation
        const qouteElement = document.createElement('div');
        qouteElement.classList = 'qoute';

          // Ajouter le texte de la citation
        const qouteText = document.createElement('p');
        qouteText.innerHTML = `<strong>${qoute.author} :</strong> ${qoute.text}`;

         // Créer un bouton pour ajouter/supprimer des favoris
        const favButton = document.createElement('button');
        favButton.innerHTML = favorites.includes(qoute.id) ? 'Retirer des Favoris' : 'Ajouter aux Favoris';
        favButton.onClick = () => toggleFavorite(qoute.id);

        // Ajouter le texte et le bouton au conteneur de citation
        qouteElement.appendChild(qouteText);
        qouteElement.appendChild(favButton);
        quotesContainer.appendChild(qouteElement);

    });
}
// Fonction pour ajouter ou supprimer une citation des favoris
function toggleFavorite (qouteId){
    if (favorites.includes(qouteId)){
        favorites = favorites.filter(id => id !== qouteId);   // Retirer des favoris

    } else {
        favorites.push(qouteId);    // Ajouter aux favoris
    }
     // Mettre à jour l'affichage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayQuotes();  // Mettre à jour l'affichage
}
// Charger et afficher les citations au chargement de la page
document.addEventListener('DOMContentLoaded', displayQuotes);