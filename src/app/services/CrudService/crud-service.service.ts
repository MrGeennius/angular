import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<any[]> {
    const url = `${this.apiUrl}/ver/personas`;
    return this.http.get<any[]>(url);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
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
}