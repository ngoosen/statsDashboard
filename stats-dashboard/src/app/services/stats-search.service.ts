import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatsSearchService {

  constructor(private _httpClient: HttpClient) { }

  getMonthly(brand : string, year: number, language: string){
    return this._httpClient.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/' + language +'.wikipedia/all-access/all-agents/' + brand + '/monthly/' + year + '010100/' + year + '123100')
  }
}
