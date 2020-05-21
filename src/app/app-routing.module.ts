import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';


const routes: Routes = [
  { path: "search", component: SearchCriteriaComponent },
  { path: "favorites", component: WatchListPageComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "**", redirectTo: "/search", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
