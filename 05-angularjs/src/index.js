
console.log('Bonjour App');
import angular from 'angular'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import CarrouselCtrl from './tp03/carrousel.controller'
import formsCtrl from './tp04/forms.controller'
import css from './tp04/forms.css'

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tplTp02, tplTp03,tplTp04].join('<hr>')

angular.module('tripApp', []).controller(CarrouselCtrl.name, CarrouselCtrl).controller(formsCtrl.name, formsCtrl)