import { Component } from '@angular/core';
import { MonthlyStats, StatsSearchService } from '../services/stats-search.service';

@Component({
  selector: 'app-stats-search',
  templateUrl: './stats-search.component.html',
  styleUrls: ['./stats-search.component.scss']
})
export class StatsSearchComponent {

  get Stats(): MonthlyStats[]{
    return this._statsSearchService.monthlyStats
  }
  isLoading: boolean = true
  selectedBrand: string = "Apple_Inc."
  selectedYear: number = 2016
  selectedLanguage: string = "en"

  constructor(private _statsSearchService : StatsSearchService) { }

  searchByBrand(){
    this._statsSearchService.getMonthly(this.selectedBrand, this.selectedYear, this.selectedLanguage).subscribe({
      next: (data) => {
        this._statsSearchService.formatMonthlyData(data)
        this.isLoading = false
      },
      error: (err) => {
        console.log("boom" + err);
      }
    })
  }
}