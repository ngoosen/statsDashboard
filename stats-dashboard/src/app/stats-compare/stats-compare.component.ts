import { Component } from '@angular/core';
import { StatsSearchService } from '../services/stats-search.service';
import { MonthlyStats } from '../stats-search/stats-search.component';

@Component({
  selector: 'app-stats-compare',
  templateUrl: './stats-compare.component.html',
  styleUrls: ['./stats-compare.component.scss']
})
export class StatsCompareComponent {

  brandsToCompare: Brand[] = [{brand: "Apple_Inc."}, {brand: "Samsung"}, {brand: "Xiaomi"}]
  selectedYear: number = 2016
  selectedLanguage: string = "en"

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
      let monthlyStats : MonthlyStats[] = []
      this._statsSearchService.getMonthly(brand.brand, this.selectedYear, this.selectedLanguage).subscribe({
        next: (data) => {
          for(let item of data.items){
            monthlyStats.push({name: brand.brand, value: item.views})
          }
        }
      })
    }
  }
}
export interface Brand{
  brand: string
}