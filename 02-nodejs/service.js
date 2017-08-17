var devfest = require("./data/devfest-2015.js");

function listerTousLesPresentateurs(){
    return devfest.speakers;
};

function listerToutesLesSessions(){
    return devfest.sessions;
};

function trouverUneSession(idSession){
    var sessions = listerToutesLesSessions();
    return sessions.filter(function(element) {
        return element.id == idSession;
    });

};

function listerTopPresentateurs(){
    var presentateurs = listerTousLesPresentateurs();
    return presentateurs.filter(function(element){
        return element.topspeaker == true;
    });
};

//console.log(listerTousLesPresentateurs());
//console.log(listerToutesLesSessions());
//console.log(trouverUneSession("s4"));
//console.log(listerTopPresentateurs());

exports.allPresentateurs = listerTousLesPresentateurs;
exports.allSessions = listerToutesLesSessions;
exports.findByIdSession = trouverUneSession;
exports.allTopPresentateurs = listerTopPresentateurs;