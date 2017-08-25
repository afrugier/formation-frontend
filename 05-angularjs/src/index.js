
// console.log('Bonjour App');
import angular from 'angular'
import ngResource from 'angular-resource'
import raceModule from './tp08/race/race.module'
import simModule from './tp08/simulator/simulator.module'

// récupération de la page HTML
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripList.html'
import tplTp06 from './tp06/tripsListDetails.html'
import tplTp07 from './tp07/tripsComments.html'
import tplTp08 from './tp08/race/race.html'

// récupération de la page controller.js
import CarrouselCtrl from './tp03/carrousel.controller'
import formsCtrl from './tp04/forms.controller'
import tripsListCtrl from './tp05/tripsList.controller'
import tripListDetailCtrl from './tp06/tripsListDetails.controller'
import tripListCommentsCtrl from './tp07/tripsComments.controller'

// récupération de la page css
import css from './tp04/forms.css'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap'


// récupération de la page service.js
import tripService from './tp07/trips.service'
import commentsService from './tp07/comments.service'
import Stepsservice from './tp07/steps.service'
import apiUrl from './tp07/apiUrls.service'

// insertion du code HTML dans le corps de la page principale
// document.querySelector('body').innerHTML = [tplTp01, tplTp02, tplTp03, tplTp04, tplTp05, tplTp06, tplTp07, tplTp08].join('<hr>')
document.querySelector('body').innerHTML = [tplTp08].join('<hr>')

angular.module('tripApp', ['ngResource', simModule.name , raceModule.name])
    .controller(CarrouselCtrl.name, CarrouselCtrl)
    .controller(formsCtrl.name, formsCtrl)
    .controller(tripsListCtrl.name, tripsListCtrl)
    .controller(tripListDetailCtrl.name, tripListDetailCtrl)
    .controller(tripListCommentsCtrl.name, tripListCommentsCtrl)
    .constant('apiUrl', apiUrl)
    .service(tripService.name, tripService)
    .factory(commentsService.name, commentsService)
    .service(Stepsservice.name, Stepsservice)