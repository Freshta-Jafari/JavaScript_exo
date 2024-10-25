
function afficherInfos(){
    const carre = document.querySelector('.carre');
    const BackgroundColor = getComputedStyle(carre).backgroundColor;
    const color = getComputedStyle(carre).color;
    const heigth = carre.offsetHeight;
    const width = carre.offsetWidth;
    const classNom = carre.className;
    const policy = getComputedStyle(carre).display;
    const familyFont = getComputedStyle(carre).fontFamily;
    const sizeFont = getComputedStyle(carre).fontSize;

    alert (`Class : ${classNom}
        -Background Color : ${BackgroundColor}
        -Color : ${color}
        -Heigth : ${heigth}
        -Width : ${width}
        -Display : ${policy}
        -Display : ${familyFont} ${sizeFont}
        `);

}
