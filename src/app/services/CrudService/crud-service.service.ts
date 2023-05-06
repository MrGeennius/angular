import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = '';
  constructor(private http: HttpClient) { }
  
  getItems(): Observable<any> {
    const url = `${this.apiUrl}/ver/personas`;
    return this.http.get<any>(url);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ver/personas`);
  }
  createItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateItem(item: any): Observable<any> {
    const url = `${this.apiUrl}/modificar/${item.id}`;
    return this.http.put(url, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  saveBannerDesc(description: string): Observable<any> {
    const bannerDesc = { description };
    return this.http.put<any>(`${this.apiUrl}/banner/guardar`, bannerDesc);
  }
  updateBannerDesc(bannerDesc: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/banner/guardar`, bannerDesc);
  }
  getBannerDesc(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/banner/ver`);
  }

  saveAboutDesc(description: string): Observable<any> {
    const aboutDesc = { description };
    return this.http.put<any>(`${this.apiUrl}/about/guardar`, aboutDesc);
  }
  updateAboutDesc(aboutDesc: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/about/guardar`, aboutDesc);
  }
  getAboutDesc(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/about/ver`);
  }


saveSaludoDesc(description: string): Observable<any> {
  const saludoDesc = { description };
  return this.http.put<any>(`${this.apiUrl}/saludo/guardar`, saludoDesc);
}
updateSaludoDesc(saludoDesc: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/saludo/guardar`, saludoDesc);
}
getSaludoDesc(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/saludo/ver`);
}

getAboutHabilidades(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/habilidad/ver`);
}
updateSkill(skill: any): Observable<any> {
  const url = `${this.apiUrl}/habilidad/modificar/${skill.id}`;
  return this.http.put(url, skill);
}
addSkill(skill: any): Observable<any> {
  const url = `${this.apiUrl}/habilidad/nueva`;
  return this.http.post<any>(url, skill);
}

deleteSkill(id: number): Observable<any> {
  const url = `${this.apiUrl}/habilidad/borrar/${id}`;
  return this.http.delete<any>(url);
}

getAboutEstudios(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/estudio/ver`);
}
updateEstudios(skill: any): Observable<any> {
  const url = `${this.apiUrl}/estudio/modificar/${skill.id}`;
  return this.http.put(url, skill);
}
addEstudios(skill: any): Observable<any> {
  const url = `${this.apiUrl}/estudio/nueva`;
  return this.http.post<any>(url, skill);
}

deleteEstudios(id: number): Observable<any> {
  const url = `${this.apiUrl}/estudio/borrar/${id}`;
  return this.http.delete<any>(url);
}

getExperiencias(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/experiencia/ver`);
}
updateExperiencias(skill: any): Observable<any> {
  const url = `${this.apiUrl}/experiencia/modificar/${skill.id}`;
  return this.http.put(url, skill);
}
addExperiencias(skill: any): Observable<any> {
  const url = `${this.apiUrl}/experiencia/nueva`;
  return this.http.post<any>(url, skill);
}

deleteExperiencias(id: number): Observable<any> {
  const url = `${this.apiUrl}/experiencia/borrar/${id}`;
  return this.http.delete<any>(url);
}

}