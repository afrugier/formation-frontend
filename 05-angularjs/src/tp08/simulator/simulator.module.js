
import SimulatorService from './simulator.service'

const simModule = angular.module('simulatorModule', [])
    .service(SimulatorService.name, SimulatorService)

export default simModule