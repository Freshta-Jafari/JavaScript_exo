

console.log("Hello JS!");

 let a=7;
 let b=14;
 let result = a+b;
 console.log(result);
 

let nomberTocacul = 7;
nomberTocacul +=7;
nomberTocacul -=5;
nomberTocacul *=6;
nomberTocacul /=3;
nomberTocacul %2;
nomberTocacul ++;
nomberTocacul --;
console.log("nomber to cacul = ", nomberTocacul);


const prenom="Freshta";
const nom="Ehsan";
const nomComplet=prenom+" "+nom;

console.log("je m'appelle",nomComplet); //
console.log(`i am ${prenom} ${nom}, souyz bienvenu !`); // Interpolations  ${}

let myNom="Freshta";
myNom += " Ehsan";
console.log("My name is ", myNom);

console.log( "meme valures 2==2  " + (2=="2"));
console.log( "meme valure et meme type 2===2  " + (2===2));
console.log( "différente valure 2!=2  " + (2!="5"));
console.log( "différent valure et type 2!==2  " + (2!=="2"));


console.log("7<12  " + (7<12));
console.log("7>5  " + (7>5));
console.log("7<=7  " + (7<=7));
console.log("7>=6  " + (7>=6));

console.log("true && true  " + (7>5 && 7==7));
console.log("true || false  " + (7>5 || 7!==7));

console.log("!true " + !(2>1));
console.log("!false " + !(2<=1));

console.log("true || (true && false)  " + (true || (true && false)));
console.log("(true || true) && false  " + ((true || true) && false));


const ageFreshta =25;
console.log("Freshta est " + (ageFreshta >= 25 ? "majeur" : "mineur") + " en France");  // Concatenation   + 
console.log(`Freshta est  ${ageFreshta <=25 ? "majeur" : "mineur"} aux Etats-Unis`);  // Interpolation     ${}

let age=30;
if(age >= 25) {
    console.log("La personne est majeur ");
}else {
    console.log("La personne et mineur ");
}

let res = 90;

if(res == 100){
    console.log("Bravoo grade A ");
}else if(res >= 90) {
    console.log("Grade B ");
}else if(res >= 80){
    console.log("Grade C");
}else {
    console.log("Passe");
}

let nomber=7;
let operation = "foisDeuxPlusTrois";

switch (operation){
    case "plusUn":
        nomber ++;
        break;
    case "foisDeuxPlusTrois":
        nomber *=2;
        nomber +=3;
        break;
    case "plusTrois":
        nomber +=3;
        break;
    case "fiosZero":
    default:
        nomber =0;
        break;
}
console.log(operation);

// La Boucle For Loop
for (let i =1; i<=10; i++) {
    console.log(`9 x ${i} = ${9 * i}`);
    
}
for(let y=1; y <= 10; y++) {
    console.log("8 x " + y + " = " + (8 * y));
}

for (let x=0; x<5; x++) {
    console.log("je serai une bonne développuse");
}

for(let a=3; a<=20; a+=3 ) {
    console.log(`${a} est inférieur ou légal à 10 et est divisible par 3`);
}

for (let f=7; f>=0; f--){
    console.log(`${f} ... `);
}
console.log("Bonne Année ! ");

// La Boucle While
let E = 12;
while(E < 18){
    console.log(`j'ai maintenat ${E} ans ... `);
    E++;
}
console.log(`J'ai finalmenet ${E} ans.`);

// Functions
function sumNombers(a, b, c){
    const res = a * b + c;
    return res;
}
const sumNo = sumNombers(7, 5, 2);
console.log(sumNo);

function afficherInfos (entreprise, niveu){
    const result = `${entreprise} ${niveu}`;
    return result;
}
const infos = afficherInfos("ELAN Formation", "Remise à niveu bac +5");
console.log(infos);


function multiply(nomber){
    return nomber *7;
}
const multi = multiply(7);
console.log("7 x 7 = " + multi);


function getComment(phrase){
    console.log(`${phrase} ! `);
}
getComment("Bonjour : je suis une Web développuse en ELAN formation.");




function stagiaireInfos(nom, prenom, emailAdress, contact1, dateNaissance, age, isStagiaire, hasRumu) {
  
    console.log(`Nom: ${nom}`);
    console.log(`Prénom: ${prenom}`);
    console.log(`Email: ${emailAdress}`);
    console.log(`Contact: ${contact1}`);
    console.log(`Date de naissance: ${dateNaissance}`);
    console.log(`Âge: ${age}`);
    console.log(`Est stagiaire: ${isStagiaire}`);
    console.log(`A un RUMU: ${hasRumu}`);
}

stagiaireInfos(
    "Freshta",
    "JAFARI",
    "jafari.freshta2024@gmail.com",
    "0758100656",
    "1999/03/22",
    25,
    true,
    true,
);


function getPiValuer(){
    return 3.14;
}
console.log(`360 deg = 2 * pi ~= ${2 * getPiValuer()} rad`);

function additionSoustraction(no1, no2){
    return no1 + no2;
}
function multiplyDevision(no1, no2){
    return no1 * no2;
}
function operationNombs(no1, operation, no2){

    switch(operation){
        case "addition":
            return additionSoustraction(no1, no2);
        case "soustraction":
            return additionSoustraction(no1, -no2);
        case "multiply":
            return multiplyDevision(no1, no2);
        case "devision":
            return multiplyDevision(no1, 1/no2);
        default:
            console.log(`Operation "${operation}" non gérée.`);
            return null;
    }
}
console.log(`7 + 2 = ${operationNombs(7, "addition", 2)}`);
console.log(`6 - 1 = ${operationNombs(6, "soustraction", 1)}`);
console.log(`3 * 4 = ${operationNombs(3, "multiply", 4)}`);
console.log(`10 / 2 = ${operationNombs(10, "devision", 2)}`);
console.log(`2 ** 3 = ${operationNombs(2, "puissance", 3)}`);

// Tableau Array
const tableauVide = [];

tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);
console.log("tableau vide ", tableauVide);
console.log("tableau vide premier index ", tableauVide[1]);
tableauVide[2] = "Hello";
console.log(tableauVide);

for (let i = 0; i < tableauVide.length; i++){
    
    const emeTabVid = tableauVide[i];
    console.log("Tableau Vide [" + i + "]  = " , emeTabVid);
}


const tabNums = [1,2,3,4,5,6,7,8,9,10];
for(let x = 0; x < tabNums.length; x += 2)
{
    const res = tabNums[x];
    console.log(x, res);
}
console.log(`tebNums.join ("_|_") = ${tabNums.join("_|_")}`);

function sum(a,b){
    const res = a + b;
    return res;
}
const total = sum(tabNums[4], tabNums[8]);
console.log(`Sum of ${tabNums[4]} and ${tabNums[8]} is ${total}`);

// Recherch les elements dans le tableau avec includes()
console.log( 
    `L'élement ${7} ${tabNums.includes(7) ? "est" : "n'est pas"}
    péresent dans la tableau [${tabNums.join(", ")}]`
);
console.log( 
    `L'élément ${44} ${tabNums.includes(44) ? "est" : "n'est pas"}
    péresent dans la tableau [${tabNums.join(", ")}]`
);

// Recherch les elements dans le tableau avec indexOf()
const indexOf8 = tabNums.indexOf(22);
if (indexOf8 != -1){
    console.log(`L'élement ${22} est à l'index ${indexOf8} dans le tableau [${tabNums.join("; ")}]`);
}else {
    console.log(`L'élement ${22} n'est pas présent dans le tableau [${tabNums.join(", ")}]`);
}


const morceau = tabNums.slice(2, 4);
console.log(`morceau tabNums.slice(2, 5) = [${morceau.join(", ")}]`);

// Associatif tableau 
let tabAssocVide = {};
tabAssocVide.prenom = "Freshta";
tabAssocVide.nom = "Ehsan";
tabAssocVide.age =25;

console.log("TabAssocVide =" , tabAssocVide);

console.log(`Je m'appelle ${tabAssocVide.prenom}`);

tabAssocVide.age = 30;
console.log("TabAssocVide =" , tabAssocVide);


let pikachu = {

    id : 7,
    name : "pikachu",
    weigth : 60,
    hight : 80,

    attacks :[
        {
            name : "Vive-Attack",
            damage : 10,
        },
        {
            name : "Boule Elek",
            damage : 20,
        },
    ],
};

console.log("pikachu", pikachu);

function listerAttaquesPokmon(pokmon){
    console.log(`${pokmon.name} posséde ${pokmon.attacks.length} attaques : `);

    for(let i =0; i <pokmon.attacks.length; i++){
        const attaque =pokmon.attacks[i];
        console.log(`\t "${attaque.name}" (puissance ${attaque.damage}) `);
    }
}
listerAttaquesPokmon(pikachu);





