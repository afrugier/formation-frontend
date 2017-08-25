export default class StepsService {

    constructor(apiUrl,$http) {
        this.apiUrl = apiUrl;
        this.$http = $http;
    }

    findStepsByTripId(tripId) {
        return this.$http.get(this.apiUrl.full + "/" + tripId)
            .then(response => {
                return response.data.steps;
            }, response => { });
    }

}