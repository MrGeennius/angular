import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditComponent } from './components/home/edit/edit.component';

const routes: Routes = [

  {path: 'portfolio',      component: HomeComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'edit/:id', component: EditComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'portfolio'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
