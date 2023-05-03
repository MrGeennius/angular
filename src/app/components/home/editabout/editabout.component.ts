import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.scss']
})
export class EditAboutComponent implements OnInit {
  aboutForm: FormGroup;
  aboutDesc: string;

  constructor(private crudService: CrudService, private router: Router) {
    this.aboutForm = new FormGroup({
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.crudService.getAboutDesc().subscribe(aboutDesc => {
      if (aboutDesc) {
        this.aboutDesc = aboutDesc.description;
        this.aboutForm.patchValue({
          description: this.aboutDesc,
        });
      }
    });
  }
  

  onSubmit(): void {
    const newDescription = this.aboutForm.value.description;
    const updatedAboutDesc = { description: newDescription };
    this.crudService.updateAboutDesc(updatedAboutDesc).subscribe(response => {
      this.router.navigate(['/portfolioLog']);
    });
  }

  }