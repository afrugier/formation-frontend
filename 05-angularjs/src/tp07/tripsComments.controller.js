export default class tripListCommentsCtrl {

    constructor(tripServiceCtrl, StepsService, commentsService) {
        this.tripServiceCtrl = tripServiceCtrl;
        this.StepsService = StepsService;
        this.commentsService = commentsService;
    }

    $onInit() {
        this.tripList = this.tripServiceCtrl.findAll();
    }

    infos() {

        this.StepsService.findStepsByTripId(this.choix)
            .then(steps => {
                this.stepsTrouves = steps
            })

        this.commentsService.findByTripId(this.choix)
            .then(comments => {
                this.commentsTrouves = comments
            })
    }

    save() {
        this.commentsService.addComment(this.commentInput, this.choix);
    }

}


