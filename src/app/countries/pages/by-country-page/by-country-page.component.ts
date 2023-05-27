import { Component } from '@angular/core';
import { Country } from '../../interfaces/capital.interface';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  paises: Country[]=[]
  terminoServicio : string='';

  constructor(private countryService : CountryService){

  }


  ngOnInit(): void {
    this.paises = this.countryService.cacheStores.byCountry.countries;
    this.terminoServicio = this.countryService.cacheStores.byCountry.term;

  }

  getPaises(tag: string):void{
    this.countryService.getCountryByTag(tag).subscribe(resp=>{
      this.paises=resp;
    })
  }

}
