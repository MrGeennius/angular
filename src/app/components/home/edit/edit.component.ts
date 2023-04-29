import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';

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
    this.itemId = +this.route.snapshot.paramMap.get('id');
    this.initForm();
    this.getItem();
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      descripcion:''

    });
  }

  getItem() {
    this.crudService.getItem(this.itemId).subscribe(item => {
      this.itemForm.patchValue({
        nombre: item.nombre,
        apellido: item.apellido,
        descripcion:''
      });
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