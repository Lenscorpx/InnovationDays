var nom = 'Mutombo';
var postnom = 'Lukusa';
var prenom = 'Lens';
var numeroPhone = '+243977551835';
function getIdentite(nom, postnom, prenom, numeroPhone) {
    console.log("Votre nom est " + nom + ", votre postnom est " + postnom + ", votre prenom est " + prenom + ", et enfin votre numero de telephone est le " + numeroPhone);
}
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
getIdentite(nom, postnom, prenom, numeroPhone);
doSomething();
