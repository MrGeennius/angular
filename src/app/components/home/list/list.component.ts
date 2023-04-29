import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  personas: any[];

  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
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
}