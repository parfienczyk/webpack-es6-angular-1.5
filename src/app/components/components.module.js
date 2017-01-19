import Home from './home/home';
import About from './about/about';
import Faq from './faq/faq';


export const components = angular
    .module('components', [
        Home,
        About,
        Faq,
    ])
    .name;
