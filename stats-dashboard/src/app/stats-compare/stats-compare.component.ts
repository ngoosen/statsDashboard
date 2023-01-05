import { Component } from '@angular/core';
import { GroupedMonthlyStats, StatsSearchService } from '../services/stats-search.service';

@Component({
  selector: 'app-stats-compare',
  templateUrl: './stats-compare.component.html',
  styleUrls: ['./stats-compare.component.scss']
})
export class StatsCompareComponent {

  brandsToCompare: Brand[] = [{brand: "Apple_Inc."}, {brand: "Samsung"}]
  selectedYear: number = 2016
  selectedLanguage: string = "en"
  groupedStats: GroupedMonthlyStats[] = []
  isLoading: boolean = true
  get MonthlyStats(){
    return this._statsSearchService.monthlyStats
  }

  constructor(private _statsSearchService : StatsSearchService) {}

  addRequest(){
    if(this.brandsToCompare.length<6){
      this.brandsToCompare.push({brand: "Apple_Inc."})
    }
    else{
      console.log("Trop de requêtes!"); // créer un toast pour dire stop
    }
  }
  compare(){
    for(let brand of this.brandsToCompare){
      this._statsSearchService.getMonthly(brand.brand, this.selectedYear, this.selectedLanguage)
      this.groupedStats.push({name: brand.brand, series: this.MonthlyStats})
    }
    this.isLoading = false
  }
}
export interface Brand{
  brand: string
}