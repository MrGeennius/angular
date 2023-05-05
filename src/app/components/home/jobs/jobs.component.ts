import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';
import { NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  personas: any;
  aboutDesc: any;
  Experiencias: any;
  active = 0;
  constructor(public analyticsService: AnalyticsService,private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.getAboutDesc();
    this.getExperiencias();
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
  goToExperiencias() {
    this.router.navigate(['/edit/experiencias']);
  }
  
  getExperiencias() {
    this.crudService.getExperiencias().subscribe(Experiencias => {
      this.Experiencias = Experiencias;
    });
  }


}

