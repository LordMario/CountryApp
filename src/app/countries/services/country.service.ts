import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/capital.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { region } from '../interfaces/region.type';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    url : string='https://restcountries.com/v3.1';


    cacheStores: CacheStore={
        byCapital: {term:'',countries:[]},
        byCountry:{term:'',countries:[]},
        byRegion: {countries:[]}

    }

    constructor(private http : HttpClient) {
        this.loadFromLocalStorage();
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

    getCapitalByTag(term:string): Observable<Country[]>{
        const url = `${this.url}/capital/${term}`
        return this.getCountryRequest(url).pipe(
            tap(countries => {
                this.cacheStores.byCapital = { term , countries }
                this.safeToLocalStorage();
            }),
        );
    }

    getCountryByTag(term:string) : Observable<Country[]>{
        const url = `${this.url}/name/${term}`
        return this.getCountryRequest(url).pipe(
            tap(countries=>{
                this.cacheStores.byCountry= {term ,countries}
                this.safeToLocalStorage();
            }),
        );
    }

    getRegionByTag(term:region) : Observable <Country[]>{
        const url = `${this.url}/region/${term}`
        return this.getCountryRequest(url).pipe(
            tap(countries=> {
                this.cacheStores.byRegion= {term , countries };
                this.safeToLocalStorage();
            }),
        );
    }


    private safeToLocalStorage(){
        localStorage.setItem('countries',JSON.stringify(this.cacheStores))
    }

    loadFromLocalStorage(){
        const existe =  localStorage.getItem('countries');
        if(existe){
            this.cacheStores= JSON.parse(existe);
        }
    }
}