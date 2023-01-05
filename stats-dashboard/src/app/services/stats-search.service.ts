import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatsSearchService {

  monthlyStats : MonthlyStats[] = []

  constructor(private _httpClient: HttpClient) { }

  getMonthly(brand : string, year: number, language: string){
    return this._httpClient.get<any>('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/' + language +'.wikipedia/all-access/all-agents/' + brand + '/monthly/' + year + '010100/' + year + '123100')
  }

  formatMonthlyData(data: any){
    this.monthlyStats = []

        for(let item of data.items){

          let monthName = ""
          switch (item.timestamp[4] + item.timestamp[5]) {
            case "01":
              monthName = "January"
              break;
            case "02":
              monthName = "February"
              break;
            case "03":
              monthName = "March"
              break;
            case "04":
              monthName = "April"
              break;
            case "05":
              monthName = "May"
              break;
            case "06":
              monthName = "June"
              break;
            case "07":
              monthName = "July"
              break;
            case "08":
              monthName = "August"
              break;
            case "09":
              monthName = "September"
              break;
            case "10":
              monthName = "October"
              break;
            case "11":
              monthName = "November"
              break;
            case "12":
              monthName = "December"
              break;
            default: "Month"
              break;
          }

          this.monthlyStats.push({
            name: monthName,
            value: item.views
          })
        }
  }
}

export interface MonthlyStats{
  name: string, // month
  value: number // views
}
export interface GroupedMonthlyStats{
  name: string, // brand
  series: MonthlyStats[]
}