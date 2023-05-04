import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss']
})
export class About2Component implements OnInit {
  personas: any;
  aboutDesc: any;
  AboutHabilidades: any;
  constructor(public analyticsService: AnalyticsService,private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.getAboutDesc();
    this.getAboutHabilidades();
  }
  getItems(): void {
    this.crudService.getItems().subscribe((data) => {
      this.personas = data;
    });
  }

  editItem(itemId: number): void {
    this.router.navigate(['/edit', itemId]);
  }

  deleteItem(itemId: number): void {
    this.crudService.deleteItem(itemId).subscribe(() => {
      this.getItems(); 
    });
  }
  getAboutDesc() {
    this.crudService.getAboutDesc().subscribe(aboutDesc => {
      this.aboutDesc = aboutDesc;
    });
  }
  goToEditAbout() {
    this.router.navigate(['/edit/about']);
  }
  goToHabilidad() {
    this.router.navigate(['/edithabilidades']);
  }
  
  getAboutHabilidades() {
    this.crudService.getAboutHabilidades().subscribe(AboutHabilidades => {
      this.AboutHabilidades = AboutHabilidades;
    });
  }



}

