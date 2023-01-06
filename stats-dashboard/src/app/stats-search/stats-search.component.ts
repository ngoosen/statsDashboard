import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedBrand: string = "Apple_Inc."
  selectedYear: number = 2016
  selectedLanguage: string = "en"


  constructor(private _statsSearchService : StatsSearchService, private _router: ActivatedRoute) { }

  ngOnInit(){
    this._router.queryParamMap.subscribe((params: any) => {
      if(params.params.brand || params.params.year || params.params.language){
        params.params.brand == undefined? this.selectedBrand : this.selectedBrand = params.params.brand
        params.params.year == undefined? this.selectedYear : this.selectedYear = params.params.year
        params.params.language == undefined? this.selectedLanguage : this.selectedLanguage = params.params.language
        this._statsSearchService.getMonthly(this.selectedBrand, this.selectedYear, this.selectedLanguage).subscribe({
          next: (data) => {
            this._statsSearchService.formatMonthlyData(data)
          },
          error: (err) => {
            console.log("boom" + err);
          }
        })
      }
    })
  }

  searchByBrand(){
    this._statsSearchService.getMonthly(this.selectedBrand, this.selectedYear, this.selectedLanguage).subscribe({
      next: (data) => {
        this._statsSearchService.formatMonthlyData(data)
        this._statsSearchService.passParamsInURL({brand: this.selectedBrand, year: this.selectedYear, language: this.selectedLanguage})
      },
      error: (err) => {
        console.log("boom" + err);
      }
    })
  }
}