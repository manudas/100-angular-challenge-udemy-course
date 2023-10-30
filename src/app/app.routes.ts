import { Routes } from "@angular/router";

export const COMPONENTS_URI = ''
export const DIRECTIVES_URI = 'directives'
export const SERVICES_URI = 'services'
export const PIPES_URI = 'pipes'
export const OTHERS_URI = 'others'

export default [
    {
        path: COMPONENTS_URI, loadChildren: () => import('./components/components-documentation/components-documentation.module').then(module => module.ComponentsDocumentationModule),
    },
    {
        path: DIRECTIVES_URI, loadChildren: () => import('./components/directives-documentation/directives-documentation.module').then(module => module.DirectivesDocumentationModule),
    },
    {
        path: SERVICES_URI, loadChildren: () => import('./components/services-documentation/services-documentation.module').then(module => module.ServicesDocumentationModule),
    },
    {
        path: PIPES_URI, loadChildren: () => import('./components/pipes-documentation/pipes-documentation.module').then(module => module.PipesDocumentationModule),
    },
    {
        path: OTHERS_URI, loadChildren: () => import('./components/others-documentation/others-documentation.module').then(module => module.OthersDocumentationModule),
    }
] as Routes