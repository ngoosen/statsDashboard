import { Component } from '@angular/core';
import { StatsSearchService } from '../services/stats-search.service';

@Component({
  selector: 'app-stats-search',
  templateUrl: './stats-search.component.html',
  styleUrls: ['./stats-search.component.scss']
})
export class StatsSearchComponent {

  monthlyStats : MonthlyStats[] = []
  isLoading: boolean = true
  selectedBrand: string = "Apple_Inc."
  selectedYear: number = 2016
  selectedLanguage: string = "en"

  constructor(private _statsSearchService : StatsSearchService) { }

  searchByBrand(){
    this._statsSearchService.getMonthly(this.selectedBrand, this.selectedYear, this.selectedLanguage).subscribe({
      next: (data) => {
        this.monthlyStats = []

        for(let item of data.items){

          let monthName = ""
          switch ((item.timestamp[4] + item.timestamp[5])) {
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
        this.isLoading = false
      },
      error: (err) => {
        console.log("boom " + err);
      }
    })
  }
}
export interface MonthlyStats{
  name: string, // month
  value: number // views
}