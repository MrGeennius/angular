import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutEstudiosComponent } from './aboutestudios/aboutestudios.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBannerComponent } from './editbanner/editbanner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditAboutComponent } from './editabout/editabout.component';
import { EditSaludoComponent } from './editsaludo/editsaludo.component';
import { EdithabilidadesComponent } from './edithabilidades/edithabilidades.component';
import { EditestudiosComponent } from './editestudios/editestudios.component';
import { EditexperienciasComponent } from './editexperiencias/editexperiencias.component';
import { HeadersecondComponent } from './headersecond/headersecond.component';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    AboutEstudiosComponent,
    ContactComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    EditBannerComponent,
    EditAboutComponent,
    EditSaludoComponent,
    EdithabilidadesComponent,
    EditestudiosComponent,
    EditexperienciasComponent,
    HeadersecondComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class HomeModule { }
