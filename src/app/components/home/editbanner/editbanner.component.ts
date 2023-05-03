import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.scss']
})
export class EditBannerComponent implements OnInit {
  bannerForm: FormGroup;
  bannerDesc: string;

  constructor(private crudService: CrudService, private router: Router) {
    this.bannerForm = new FormGroup({
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.crudService.getBannerDesc().subscribe(bannerDesc => {
      if (bannerDesc) {
        this.bannerDesc = bannerDesc.description;
        this.bannerForm.patchValue({
          description: this.bannerDesc,
        });
      }
    });
  }
  

  onSubmit(): void {
    const newDescription = this.bannerForm.value.description;
    const updatedBannerDesc = { description: newDescription };
    this.crudService.updateBannerDesc(updatedBannerDesc).subscribe(response => {
      this.router.navigate(['/portfolioLog']);
    });
  }

  }