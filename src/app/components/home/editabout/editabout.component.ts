import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.scss']
})
export class EditAboutComponent implements OnInit {
  aboutForm: FormGroup;
  aboutDesc: string;
  img_url: string;

  constructor(private crudService: CrudService, private router: Router) {
    this.aboutForm = new FormGroup({
      description: new FormControl('', Validators.required),
      img_url: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.crudService.getAboutDesc().subscribe(aboutDesc => {
      if (aboutDesc) {
        this.aboutDesc = aboutDesc.description;
        this.img_url = aboutDesc.img_url;
        this.aboutForm.patchValue({
          description: this.aboutDesc,
          img_url: this.img_url,
        });
      }
    });
  }
  

  onSubmit(): void {
    const newDescription = this.aboutForm.value.description;
    const newImgUrl = this.aboutForm.value.img_url;
    const updatedAboutDesc = { description: newDescription, img_url: newImgUrl };
    this.crudService.updateAboutDesc(updatedAboutDesc).subscribe(response => {
      this.router.navigate(['/portfolioLog']);
    });
  }

  }