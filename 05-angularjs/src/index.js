
console.log('Bonjour App');
import angular from 'angular'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tplTp02].join('<hr>')