import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      // Agrega aquí los demás campos que necesites
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.crudService.createItem(this.form.value).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
