export default class tripListCtrl {

    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.$http.get('http://localhost:3000/trips')
            .then(response => {
                this.data = response.data;
            }, response => {});
    }

    save(data) {
        // alert(data.id+" - "+data.name+" - "+data.price+" - "+data.imageUrl)

        this.$http.patch("http://localhost:3000/trips/"+data.id, data)
            .then(alert("l'enregistrement du voyage pour "+data.name+" a été un succés"));
    }

}


