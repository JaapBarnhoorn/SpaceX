import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketInformationComponent } from './rocket/rocket-detail/rocket-information/rocket-information.component'
import { RocketComponent } from './rocket/rocket.component'

const routes: Routes = [
  { path: '', component: RocketComponent, data: {depth: 1}},
  { path: ':id', component: RocketInformationComponent, data: {depth: 2}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
