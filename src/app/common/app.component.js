import templateUrl from './app.html';

export const appComponent = {
    templateUrl,
    controller: class AppComponent {
        constructor($state) {
            'ngInject';

            this.$state = $state;
        }
    },
};
