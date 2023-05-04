import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editestudios',
  templateUrl: './editestudios.component.html',
  styleUrls: ['./editestudios.component.scss']
})
export class EditestudiosComponent implements OnInit {
  AboutEstudios: any;
  newEstudios: any = { estudio: '' }
  isAddButtonDisabled: boolean = false;
  remainingTime: number = 0;
  newEstudiosForm: FormGroup;
  skillForms: FormGroup[] = [];
  constructor(private crudService: CrudService, private fb: FormBuilder, private router: Router) {
    this.newEstudiosForm = this.fb.group({
      estudio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.getAboutEstudios();
  }

  getAboutEstudios() {
    this.crudService.getAboutEstudios()
      .pipe(
        tap(AboutEstudios => {
          this.AboutEstudios = AboutEstudios;
          this.skillForms = AboutEstudios.map(estudio => {
            return this.fb.group({
              estudio: [estudio.estudio, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
            });
          });
          console.log('AboutEstudios recibido:', AboutEstudios);
        })
      )
      .subscribe();
  }

  updateEstudios(skill: any) {
    this.crudService.updateEstudios(skill).subscribe(updatedEstudios => {
      console.log('Estudio actualizado:', updatedEstudios);
    });
  }

  addEstudios(skillData: any) {
    if (this.remainingTime <= 0) {
      this.isAddButtonDisabled = true;
      this.crudService.addEstudios(skillData).subscribe((createdEstudios) => {
        this.getAboutEstudios();
        this.newEstudiosForm.reset();
        this.isAddButtonDisabled = false;
        this.remainingTime = 5;
        const interval = setInterval(() => {
          this.remainingTime--;
          if (this.remainingTime <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      });
    }
  }

  deleteEstudios(id: number) {
    this.crudService.deleteEstudios(id).subscribe(deletedEstudios => {
      console.log('Estudio eliminado:', deletedEstudios);
      this.getAboutEstudios(); // Actualiza la lista de estudios
    });
  }
  goBack(){
    this.router.navigate(['/portfolioLog']);
  }
}