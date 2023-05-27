import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/capital';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    url : string='https://restcountries.com/v3.1';

    constructor(private http : HttpClient) {
        
    }

    private getCountryRequest(url :string): Observable<Country[]>{
        return this.http.get<Country[]>(`${url}`).pipe(
            catchError(error=> of([]))
        );
    }

    searchCountryByAlphaCode(cod:string): Observable<Country | null >{
        return this.http.get<Country[]>(`${this.url}/alpha/${cod}`)
        .pipe(
            map(countries => countries.length>0 ? countries[0] : null),
            catchError(error=> of(null)),
        );
    }

    getCapitalByTag(tag:string): Observable<Country[]>{
        const url = `${this.url}/capital/${tag}`
        return this.getCountryRequest(url);
    }

    getCountryByTag(tag:string) : Observable<Country[]>{
        const url = `${this.url}/name/${tag}`
        return this.getCountryRequest(url);
    }

    getRegionByTag(tag:string) : Observable <Country[]>{
        const url = `${this.url}/region/${tag}`
        return this.getCountryRequest(url);
    }
}