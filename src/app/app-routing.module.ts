import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';

const routes: Routes = [
  { path :"", redirectTo:"my-recommendations", pathMatch : "full"},
  { path : 'my-recommendations', component : MyRecommendationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
