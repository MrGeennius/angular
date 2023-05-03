import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.scss']
})
export class Contact2Component implements OnInit {
  personas: any;
  saludoDesc: any;
  constructor(public analyticsService: AnalyticsService,private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.getSaludoDesc();
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
  getSaludoDesc() {
    this.crudService.getSaludoDesc().subscribe(saludoDesc => {
      this.saludoDesc = saludoDesc;
    });
  }
  goToEditSaludo() {
    this.router.navigate(['/edit/saludo']);
  }
}
