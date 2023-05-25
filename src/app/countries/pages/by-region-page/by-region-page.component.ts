import { Component } from '@angular/core';
import { Country } from '../../interfaces/capital';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {


  region : Country[]=[];

  constructor(private http: CountryService){

  }

  getRegion(tag : string) : void{
    this.http.getRegionByTag(tag).subscribe(resp=>{
      this.region=resp;
    })
  }
}
