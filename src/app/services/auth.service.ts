import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://jay-service.onrender.com/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient){ 
  console.log("El servicio esta corriendo.");
  this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }
  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post<boolean>(this.url, credenciales).pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          sessionStorage.setItem("currentUser", JSON.stringify(credenciales));
        }
        return isLoggedIn;
      })
    );
  }
}
