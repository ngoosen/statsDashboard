import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatsSearchService {

  constructor(private _httpClient: HttpClient) { }

  getMonthly(brand : string){
    return this._httpClient.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/fr.wikipedia/all-access/all-agents/' + brand + '/monthly/2016010100/2016123100')
  }
}
