import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/capital';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {


  capitales: Country[]=[];
  isLoading : boolean = false;

  constructor(private http: CountryService) {
    
  }


  searchByCapital (term :string): void{
    this.isLoading=true;
    this.http.getCapitalByTag(term).subscribe((resp: Country[])=>{
      this.capitales=resp;
      this.isLoading=false;
    });
  }
}
