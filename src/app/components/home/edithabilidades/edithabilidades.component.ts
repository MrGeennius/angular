import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/CrudService/crud-service.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.scss']
})
export class EdithabilidadesComponent implements OnInit {
  AboutHabilidades: any;
  newSkill: any = { habilidad: '' }
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAboutHabilidades();
  }

  getAboutHabilidades() {
    this.crudService.getAboutHabilidades()
      .pipe(
        tap(AboutHabilidades => {
          this.AboutHabilidades = AboutHabilidades;
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

  addSkill(skill: any) {
    this.crudService.addSkill(skill).subscribe(newSkill => {
      console.log('Habilidad agregada:', newSkill);
      this.getAboutHabilidades(); // Actualiza la lista de habilidades
    });
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