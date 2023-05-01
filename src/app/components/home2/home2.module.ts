import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { About2Component } from './about2/about2.component';
import { Banner2Component } from './banner2/banner2.component';
import { Contact2Component } from './contact2/contact2.component';
import { Footer2Component } from './footer2/footer2.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../home/home.module';
import { HttpClient } from '@angular/common/http';
import { Jobs2Component } from './jobs2/jobs2.component';
import { Proyects2Component } from './proyects2/proyects2.component';
import { MoreProyects2Component } from './more-proyects2/more-proyects2.component';
import { Home2Component } from './home2.component';
import { Header2Component } from './header2/header2.component';



@NgModule({
  declarations: [
    About2Component,
    Banner2Component,
    Contact2Component,
    Footer2Component,
    Header2Component,
    Jobs2Component,
    Proyects2Component,
    MoreProyects2Component,
    Home2Component,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    NgbNavModule,
    MatInputModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [Footer2Component]
})
export class Home2Module {}
