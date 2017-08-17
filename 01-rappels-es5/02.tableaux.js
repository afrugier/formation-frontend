console.log("02 - tableaux");

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(elements){
    console.log(elements)
});


console.log("lettreADansToutesLesVilles ==",
    villes.every(function(elements){
        return elements.indexOf("a")>=0;
    })
);

console.log("auMoinsUneVilleAvecUnTiret ==",
    villes.some(function(elements){
        return elements.indexOf("-")>=0;
    })
);

console.log("villesSansTiretSansEspace ==",
    villes.filter(function(elements){
        return elements.indexOf(" ")<=0 && elements.indexOf("-")<=0;
    })
);

console.log("villesMajusculeSeTerminantParS ==",
    villes.filter(function(elements){
        //return elements.substring(elements.length - 1).indexOf("s")>=0;
        return elements.slice(-1) === "s";
    })
    .map(function(elements){
        return elements.toUpperCase();
    })
);