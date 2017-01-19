import loader from 'angular-loading-bar';
import {app} from './app.module';
import Navbar from './navbar/navbar';

export const common = angular
    .module('common', [
        loader,
        app,
        Navbar,
    ])
    .run(($transitions, cfpLoadingBar) => {
        'ngInject';

        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .name;
