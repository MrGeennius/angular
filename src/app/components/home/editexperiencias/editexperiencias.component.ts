import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editexperiencias',
  templateUrl: './editexperiencias.component.html',
  styleUrls: ['./editexperiencias.component.scss']
})
export class EditexperienciasComponent implements OnInit {
  Experiencias: any;
  newExperiencias: any = { experiencia: '' }
  isAddButtonDisabled: boolean = false;
  remainingTime: number = 0;
  newExperienciasForm: FormGroup;
  skillForms: FormGroup[] = [];
  experienceFormSubmitted: boolean = false;
  showAddForm = false;
  constructor(private crudService: CrudService, private fb: FormBuilder, private router: Router) {
    this.newExperienciasForm = this.fb.group({
      tab: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getExperiencias();
  }
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
  
  getExperiencias() {
    this.crudService.getExperiencias()
      .pipe(
        tap(Experiencias => {
          this.Experiencias = Experiencias;
          this.skillForms = Experiencias.map(experiencia => {
            return this.fb.group({
              id: [experiencia.id],
              tab: [experiencia.tab, Validators.required],
              titulo: [experiencia.titulo, Validators.required],
              fecha: [experiencia.fecha, Validators.required],
              description: [experiencia.description, Validators.required]
            });
          });
          console.log('Experiencias recibido:', Experiencias);
        })
      )
      .subscribe();
  }

  updateExperiencias(experience: any) {
    this.crudService.updateExperiencias(experience).subscribe(updatedExperience => {
      console.log('Experiencia actualizada:', updatedExperience);
      this.experienceFormSubmitted = true;
      setTimeout(() => {
        this.experienceFormSubmitted = false;
      }, 5000);
    });
  }
  addExperiencias(skillData: any) {
    if (this.remainingTime <= 0) {
      this.isAddButtonDisabled = true;
      this.crudService.addExperiencias(skillData).subscribe((createdExperiencias) => {
        this.getExperiencias();
        this.newExperienciasForm.reset();
        this.isAddButtonDisabled = false;
        this.remainingTime = 10;
        const interval = setInterval(() => {
          this.remainingTime--;
          if (this.remainingTime <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      });
    }
  }

  deleteExperiencias(id: number) {
    this.crudService.deleteExperiencias(id).subscribe(deletedExperiencias => {
      console.log('Experiencia eliminado:', deletedExperiencias);
      this.getExperiencias(); // Actualiza la lista de experiencias
    });
  }
  goBack(){
    this.router.navigate(['/portfolioLog']);
  }
}