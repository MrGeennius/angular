import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/home/edit/edit.component';
import { EditBannerComponent } from './components/home/editbanner/editbanner.component';
import { Home2Component } from './components/home2/home2.component';
const routes: Routes = [

  {path: 'portfolioLog',      component: HomeComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'edit/1', component: EditComponent },
  {path: 'edit/banner', component: EditBannerComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'portfolio'},
  {path: 'portfolio', component: Home2Component}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
