import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public form!:FormGroup;



  constructor(private formBuilder:FormBuilder, private router:Router) {}
    
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
}
 