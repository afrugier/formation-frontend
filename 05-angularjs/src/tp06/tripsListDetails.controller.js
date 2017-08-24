export default class tripListDetailCtrl {

    constructor($resource) {
        this.$resource = $resource
    }

    $onInit() {
        this.TripResource = this.$resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
            'update': { method:'PUT' }
        })
        this.data = this.TripResource.query()
    }

    save(data) {
        data.$update();
    }

}


