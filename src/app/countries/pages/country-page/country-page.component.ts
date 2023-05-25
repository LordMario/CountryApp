import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService){

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) =>{
      this.countryService.searchCountryByAlphaCode(id).subscribe(country=>{
        console.log(country);
      })
    })
  }

}
