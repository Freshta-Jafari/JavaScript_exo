
document.addEventListener('DOMContentLoaded', function() {
    function addColor(color) {
        // Récupérer le carré du bas par son ID
        const bottomCarre = document.getElementById('bottomCarre');
        
        // Changer la couleur de fond du carré du bas
        bottomCarre.style.backgroundColor = color;
        
        // Afficher le code couleur
        document.getElementById('bottomCarre').textContent = `Code color : ${color}`;
    }

    // Exposer la fonction pour l'utiliser dans l'HTML
    window.addColor = addColor;
});
