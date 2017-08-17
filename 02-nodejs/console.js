const readline = require('readline');

var service = require('./service.js');
var allPresentateurs = service.allPresentateurs();
var allSessions = service.allSessions();
var allTopPresentateurs = service.allTopPresentateurs();

rl = readline.createInterface(process.stdin,process.stdout),
prefix = "*** Application Conférence *** \n"+
"1. Liste de tous les présentateurs \n"+
"2. Top présentateurs \n"+
"3. Liste des sessions \n"+
"4. Détail d'une session \n"+
"99. Sortir \n";

rl.on('line', function(line) {
  
    switch(line.trim()) {
        case '1':
        console.log();
            allPresentateurs.forEach(function(p) {
                console.log(p.firstname,p.lastname);
            });
        console.log();
        break;
        case '2':
        console.log();
            allTopPresentateurs.forEach(function(p){
                console.log(p.firstname,p.lastname);
            });
        console.log();
        break;
        case '3':
        console.log();
            allSessions.forEach(function(s){
                console.log("->",s.title);
            });
        console.log();
        break;
        case '4':
        console.log();
            rl.question('Quelle session voulez vous ? (identifiants)', (answer) => {
                
                var findByIdSession = service.findByIdSession(answer);
                findByIdSession.forEach(function(s){
                    console.log("descritions :",s.desc);
                    console.log("Presentateur(s) :",s.speakers)
                    console.log();
                    rl.setPrompt(prefix, prefix.length);
                    rl.prompt();
                });
                
            });
        console.log();
        break;
        case '99': 
        rl.close()
        break;
        default:
        console.log('tu as dit quoi? tu as dit : `' + answer + '`');
        break;
    }
    if(line.trim()!=4){
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();
    }
    
}).on('close', function() {
  console.log('Au revoir !');
  process.exit(0);
});

rl.setPrompt(prefix, prefix.length);
rl.prompt();