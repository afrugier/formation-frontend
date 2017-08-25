class CommentsService {

    constructor(apiUrl, $http) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    findByTripId(tripId) {
        return this.$http.get(this.apiUrl.full + "/" + tripId)
            .then(response => {
                return response.data.comments;
            }, response => { });
    }

    addComment(tripComment, tripId) {
        let fullTrip;

        this.$http.get(this.apiUrl.full + "/" + tripId)
            .then(response => {
                fullTrip = response.data;
                if (!fullTrip.comments) {
                    fullTrip.comments = [{
                        "id": "anonymous",
                        "text": tripComment
                    }]
                } else {
                    fullTrip.comments.push({
                        "id": "anonymous",
                        "text": tripComment
                    })
                }

                this.$http.put(this.apiUrl.full + "/" + fullTrip.id, fullTrip)
                    .then(alert("l'enregistrement du commentaire pour le voyage " + fullTrip.name + " a été un succés"));



            }, response => { });

    }

}

const commentsService = (apiUrl, $http) => {
    return new CommentsService(apiUrl, $http);
}

export default commentsService;