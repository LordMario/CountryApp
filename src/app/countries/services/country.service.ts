import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/capital';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    url : string='https://restcountries.com/v3.1';

    constructor(private http : HttpClient) {
        
    }
    
    searchCountryByAlphaCode(cod:string): Observable<Country | null >{
        return this.http.get<Country[]>(`${this.url}/alpha/${cod}`)
        .pipe(
            map(countries => countries.length>0 ? countries[0] : null),
            catchError(error=> of(null)),
        );
    }



    getCapitalByTag(tag:string): Observable<Country[]>{
        return this.http.get<Country[]>(`${this.url}/capital/${tag}`).pipe(
            catchError(error=> of([]))
        );
    }


    getCountryByTag(tag:string) : Observable<Country[]>{
        return this.http.get<Country[]>(`${this.url}/name/${tag}`).pipe(
            catchError(error=> of([]))
        )
    }


    getRegionByTag(tag:string) : Observable <Country[]>{
        return this.http.get<Country[]>(`${this.url}/region/${tag}`).pipe(
            catchError(error=> of([]))
        )
    }

}