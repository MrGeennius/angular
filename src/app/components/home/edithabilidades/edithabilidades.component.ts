import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.scss']
})
export class EdithabilidadesComponent implements OnInit {
  AboutHabilidades: any;
  newSkill: any = { habilidad: '' }
  isAddButtonDisabled: boolean = false;
  remainingTime: number = 0;
  newSkillForm: FormGroup;
  skillForms: FormGroup[] = [];
  constructor(private crudService: CrudService, private fb: FormBuilder, private router: Router) {
    this.newSkillForm = this.fb.group({
      habilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    });
  }

  ngOnInit(): void {
    this.getAboutHabilidades();
  }

  getAboutHabilidades() {
    this.crudService.getAboutHabilidades()
      .pipe(
        tap(AboutHabilidades => {
          this.AboutHabilidades = AboutHabilidades;
          this.skillForms = AboutHabilidades.map(habilidad => {
            return this.fb.group({
              habilidad: [habilidad.habilidad, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]]
            });
          });
          console.log('AboutHabilidades recibido:', AboutHabilidades);
        })
      )
      .subscribe();
  }

  updateSkill(skill: any) {
    this.crudService.updateSkill(skill).subscribe(updatedSkill => {
      console.log('Habilidad actualizada:', updatedSkill);
    });
  }

  addSkill(skillData: any) {
    if (this.remainingTime <= 0) {
      this.isAddButtonDisabled = true;
      this.crudService.addSkill(skillData).subscribe((createdSkill) => {
        this.getAboutHabilidades();
        this.newSkillForm.reset();
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

  deleteSkill(id: number) {
    this.crudService.deleteSkill(id).subscribe(deletedSkill => {
      console.log('Habilidad eliminada:', deletedSkill);
      this.getAboutHabilidades(); // Actualiza la lista de habilidades
    });
  }
  goBack(){
    this.router.navigate(['/portfolioLog']);
  }
}