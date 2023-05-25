import { Component } from '@angular/core';
import { Country } from '../../interfaces/capital';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  paises: Country[]=[]


  constructor(private http : CountryService){

  }


  getPaises(tag: string):void{
    this.http.getCountryByTag(tag).subscribe(resp=>{
      this.paises=resp;
    })
  }

}
