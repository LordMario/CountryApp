import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact-page/contact.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';

const routes: Routes =[
    {
        path:'about',
        component:AboutPageComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'countries',
        loadChildren: () => import('./countries/countries.module').then(m=>m.CountriesModule),
    },
    {
        path:'**',
        component: ByCapitalPageComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule {}