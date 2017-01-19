import angular from 'angular';
import uiRouter from 'angular-ui-router';
import faqComponent from './faq.component';

let faqModule = angular.module('faq', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('faq', {
      url: '/faq',
      component: 'faq'
    });
})

.component('faq', faqComponent)
  
.name;

export default faqModule;
