import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    /* RouterModule.forChild([
      { path: '', component: AppComponent, children: [
        { path: '', redirectTo: '/dashboard' },
        { path: 'dashboard', component: DashboardComponent, data: { label: 'Dashboard' } },
        { path: 'heroes', component: HeroesComponent, data: { label: 'Heroes' } }
      ] }
    ]) */],
  exports: [RouterModule]
})
export class AppRoutingModule { }
