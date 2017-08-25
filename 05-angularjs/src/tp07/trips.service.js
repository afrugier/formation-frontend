export default class tripServiceCtrl {

    constructor(apiUrl, $resource) {
        this.$resource = $resource;
        this.apiUrl = apiUrl;
        this.TripResource = this.$resource(this.apiUrl.light, {tripId:"@id"}, {
            'update': { method:'PUT' }
        })
    }

    findAll() {
        return this.TripResource.query()
    }

}

tripServiceCtrl.$inject = ['apiUrl', '$resource']


