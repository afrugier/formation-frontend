export default class raceCtrl {

    constructor(RaceService, SimulatorService) {
        this.RaceService = RaceService;
        this.SimulatorService = SimulatorService;
    }

    $onInit() {
        this.walkersList = this.RaceService.list();
    }
    start(){
        this.SimulatorService.start();
    }

    reset(){
        this.SimulatorService.reset();
    }
}


