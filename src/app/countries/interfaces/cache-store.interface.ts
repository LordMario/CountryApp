import { region } from './region.type';
import { Country } from "./capital.interface";

export interface CacheStore{
    byCapital :TermContries;
    byCountry :TermContries;
    byRegion :TermRegion;
}

export interface TermContries{
    term: string;
    countries : Country[]
}

export interface TermRegion{
    term?: region;
    countries : Country[]
}