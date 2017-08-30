export default class SimulatorService {
    constructor($interval, RaceService) {
        this.RaceService = RaceService;
        this.walkers = RaceService.list();
        this.$interval = $interval;
    }

    start() {
        let stopTime = this.$interval(() => {
            let min = 10;
            let max = 30;

            this.walkers.forEach(w => {
                this.RaceService.update(
                    w.name,
                    Math.floor(Math.random() * (max - min)) + min
                );
            });

            if (this.walkers.find(w => w.progress >= 100)) {
                w.progress = 100
                this.$interval.cancel(stopTime);
            }

        }, 1000)
    }

    reset(){
         this.walkers.forEach(w => {
                w.progress = 0;
            });
    }
}