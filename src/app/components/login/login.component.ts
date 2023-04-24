import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public form!:FormGroup;



  constructor(private formBuilder:FormBuilder, private router:Router, private authService:AuthService) {}
    
  ngOnInit(): void {
    this.form = this.createForm();
  }

   private createForm():FormGroup{
    return this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      });
   }

   public submitForm(){
    if(this.form.invalid){
      Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return; 
    }
    this.router.navigate(['/portfolio']);
    // alert("Se envio el formulario.");
    // console.log(this.form.value);
   }

  get Email()
  {
    return this.form.get('email');
  }
  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    const credentials = {
      mailUser: this.form.value.email,
      passwordUser: this.form.value.password
    };
    console.log("Credenciales enviadas:", credentials);
    this.authService.IniciarSesion(credentials).subscribe((isLoggedIn) => {
      console.log("DATA:", isLoggedIn);
      if (isLoggedIn) {
        this.router.navigate(["/portfolio"]);
      } else {
        // Manejar el caso en que las credenciales no son válidas (mostrar mensaje de error, etc.)
      }
    });
  }
}