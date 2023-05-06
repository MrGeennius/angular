import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-editsaludo',
  templateUrl: './editsaludo.component.html',
  styleUrls: ['./editsaludo.component.scss']
})
export class EditSaludoComponent implements OnInit {
  saludoForm: FormGroup;
  saludoDesc: string;

  constructor(private crudService: CrudService, private router: Router) {
    this.saludoForm = new FormGroup({
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.crudService.getSaludoDesc().subscribe(saludoDesc => {
      if (saludoDesc) {
        this.saludoDesc = saludoDesc.description;
        this.saludoForm.patchValue({
          description: this.saludoDesc,
        });
      }
    });
  }
  
  

  onSubmit(): void {
    const newDescription = this.saludoForm.value.description;
    const updatedSaludoDesc = { description: newDescription };
    this.crudService.updateSaludoDesc(updatedSaludoDesc).subscribe(response => {
      this.router.navigate(['/portfolioLog']);
    });
  }

  }