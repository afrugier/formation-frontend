function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return (nom+" "+prenom+" a le pseudo : "+pseudo);
    }
}

var jules = new Personne("LEMAIRE", "jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(Personne){
console.log(Personne.nom, "|", Personne.prenom, "|", Personne.pseudo, "|", Personne.getNomComplet());    
}
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE"
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function(){
    return this.nom.charAt(0)+this.prenom.charAt(0);
}
console.log(jules.getInitiales());

var robert = {
    prenom: "Robert",
    nom : "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function(){
        return (this.nom+" "+this.prenom+" a le pseudo : "+this.pseudo);
    }
}
console.log(afficherPersonne(robert));

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this,nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfo = function(){
        return (nom+" "+prenom+" a le numéro client : "+numeroClient);
    }
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());