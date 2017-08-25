
import RaceService from './race.service'
import RaceCtrl from './race.controller'

const raceModule = angular.module('raceModule', [])
    .service(RaceService.name, RaceService)
    .controller(RaceCtrl.name, RaceCtrl)
    
export default raceModule