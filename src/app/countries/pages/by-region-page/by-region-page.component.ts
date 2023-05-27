import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/capital.interface';
import { region } from '../../interfaces/region.type';



@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {


  region : Country[]=[];

  regions: region []=['Africa','America','Asia','Europe','Oceania'];

  selectedRegion?: region;

  constructor(private terminoServicio: CountryService){

  }
  ngOnInit(): void {
    this.region=this.terminoServicio.cacheStores.byRegion.countries;
    this.selectedRegion = this.terminoServicio.cacheStores.byRegion.term;
  }

  getRegion(tag : region) : void{
    this.selectedRegion= tag;
    this.terminoServicio.getRegionByTag(tag).subscribe(resp=>{
      this.region=resp;
    })
  }
}
