import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatsCompareComponent } from './stats-compare/stats-compare.component';
import { StatsSearchComponent } from './stats-search/stats-search.component';

const routes: Routes = [
  {path: "", component: StatsSearchComponent},
  {path: "compare", component: StatsCompareComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
