import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/home/edit/edit.component';
import { EditBannerComponent } from './components/home/editbanner/editbanner.component';
import { Home2Component } from './components/home2/home2.component';
import { AboutComponent } from './components/home/about/about.component';
import { EditAboutComponent } from './components/home/editabout/editabout.component';
import { EditSaludoComponent } from './components/home/editsaludo/editsaludo.component';
import { EdithabilidadesComponent } from './components/home/edithabilidades/edithabilidades.component';
const routes: Routes = [

  {path: 'portfolio', component: Home2Component},
  {path: 'portfolioLog',      component: HomeComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'edit/1', component: EditComponent },
  {path: 'edit/saludo', component: EditSaludoComponent},
  {path: 'edit/banner', component: EditBannerComponent},
  {path: 'edit/about', component: EditAboutComponent},
  { path: 'edithabilidades', component: EdithabilidadesComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'portfolio'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
