import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';

const routes : Routes = [
  {
    path:'by-countries',
    component: ByCountryPageComponent
  },
  {
    path:'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path:'by-region',
    component: ByRegionPageComponent,
  },
  {
    path:'by/:id',
    component:CountryPageComponent
  },
  {
    path:'**',
    redirectTo:'by-capital' 
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]

})
export class CountriesRoutingModule { }