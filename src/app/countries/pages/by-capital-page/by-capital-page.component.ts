import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/capital.interface';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {


  capitales: Country[]=[];
  isLoading : boolean = false;
  terminoServicio : string='';

  constructor(private countryService: CountryService) {
    
  }

  ngOnInit(): void {
    this.capitales = this.countryService.cacheStores.byCapital.countries;
    this.terminoServicio = this.countryService.cacheStores.byCapital.term;

  }

  searchByCapital (term :string): void{
    this.isLoading=true;
    this.countryService.getCapitalByTag(term).subscribe((resp: Country[])=>{
      this.capitales=resp;
      this.isLoading=false;
    });
  }
}
