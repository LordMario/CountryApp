import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/capital.interface';

@Component({
  selector: 'country-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  country? :Country;

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService, private router: Router){

  }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.searchCountryByAlphaCode(id)),
    )
    .subscribe(country =>{
      if(!country){
        return this.router.navigateByUrl('');
      }else{
        return this.country=country;
      }
    })
  }

}
