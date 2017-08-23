export default class formsCtrl {

    reset() {
        this.user = angular.copy(this.userSave);
        // this.user = null;
    }

    update(user) {
        this.userSave = angular.copy(user);
    }

}