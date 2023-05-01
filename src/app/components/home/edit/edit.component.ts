import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  itemForm: FormGroup;
  itemId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.itemId = 1;
    this.initForm();
    this.getItem();
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido: '',
      descripcion:''
      
    });
  }

  getItem() {
    this.crudService.getItem(this.itemId).subscribe(itemArray => {
      const item = itemArray[0]; // Accede al primer elemento del array
      
      console.log('Item received:', item);
      
      this.itemForm.patchValue({
        nombre: item.nombre,
        apellido: item.apellido,
        descripcion: item.descripcion
      });
  
      console.log('Updated form values:', this.itemForm.value);
    });
    
  }

  saveItem() {
    const updatedItem = {
      ...this.itemForm.value,
      id: this.itemId
    };
    
    this.crudService.updateItem(updatedItem).subscribe(
      (response) => {
        console.log('Update response:', response);
        this.router.navigate(['/portfolio']);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  
}