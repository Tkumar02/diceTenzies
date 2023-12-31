import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DieComponent } from './die/die.component';
import { HomeComponent } from './home/home.component';
import { DiceComponent } from './dice/dice.component';
import { StatsComponent } from './stats/stats.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
  {path: 'dice', component: DieComponent},
  {path: '', component: HomeComponent},
  {path: 'single', component: DiceComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'name', component: NameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
