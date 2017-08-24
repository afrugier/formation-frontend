
console.log('Bonjour App');
import angular from 'angular'
import ngResource from 'angular-resource'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripList.html'
import tplTp06 from './tp06/tripsListDetails.html'
import CarrouselCtrl from './tp03/carrousel.controller'
import formsCtrl from './tp04/forms.controller'
import tripsListCtrl from './tp05/tripsList.controller'
import tripListDetailCtrl from './tp06/tripsListDetails.controller'
import css from './tp04/forms.css'

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01, tplTp02, tplTp03, tplTp04, tplTp05, tplTp06].join('<hr>')

angular.module('tripApp', ['ngResource'])
    .controller(CarrouselCtrl.name, CarrouselCtrl)
    .controller(formsCtrl.name, formsCtrl)
    .controller(tripsListCtrl.name, tripsListCtrl)
    .controller(tripListDetailCtrl.name, tripListDetailCtrl)