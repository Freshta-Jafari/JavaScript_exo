// Sélectionner tous les éléments avec la classe 'icon'
const icons = document.querySelectorAll('.icon');
const body = document.body;
const socailName = document.getElementById('socailName');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const isActive = icon.classList.contains('active');
        resetIcon();

        if(!isActive){
             // Changer la couleur du fond
            const color = icon.getAttribute('data-color');
            body.style.backgroundColor = color;

            // Afficher le nom du réseau social
            const name = icon.getAttribute('data-name');
            socailName.textContent = name;

            // Appliquer les styles à l'icône cliquée
            icon.classList.add('active');
        } else {
            body.style.backgroundColor = 'grey';
            socailName.textContent = '';
        }
    });
});
 // Réinitialiser le fond et le texte
function resetIcon(){
    icons.forEach(icon => icon.classList.remove('active'));
}
