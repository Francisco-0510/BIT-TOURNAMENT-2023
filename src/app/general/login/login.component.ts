import { Component, OnInit } from '@angular/core';
import { ServicesloginService } from 'src/app/login/serviceslogin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  emailCheck = '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';
  
  emailReq(){
    return this.miform.controls['usuario']?.errors?.['required'] && this.miform.controls['usuario']?.touched;
  }
  
  emailPat(){
    return this.miform.controls['usuario']?.errors?.['pattern'] && this.miform.controls['usuario']?.touched;
  }
  
  campoValido(campo:any){
    return this.miform.controls[campo].errors && this.miform.controls[campo].touched;
  }
  
  miform: FormGroup = this.FB.group({
    usuario: ['',[Validators.required]],
    contrasenia: ['',[Validators.required, Validators.minLength(6)]]
  });
  
  constructor(private loginService: ServicesloginService, private FB: FormBuilder, private router: Router, private CS: CookieService) { }

  ngOnInit(): void {
    this.miform.setValue({
      usuario: '',
      contrasenia: ''
    });
  }

  loginUsuarios(){
    console.log(this.miform.value);
    this.loginService.loginUsuarios(this.miform.value).subscribe(
      (datos:any)=>{
        if(datos.tipo == 1){
          Swal.fire({
            icon: 'success',
            title: 'Login Correcto',
            text: 'Has ingresado como estudiante',
            showConfirmButton: false,
            timer: 1500
          })
          this.CS.set('nombre',datos.nombre);
          this.router.navigate(['estudiante-torneo']);
        }else if (datos.tipo == 2) {
          Swal.fire({
            icon: 'success',
            title: 'Login Correcto',
            text: 'Has ingresado como administrador',
            showConfirmButton: false,
            timer: 1500
          })
          this.CS.set('nombre',datos.nombre);
          this.router.navigate(['ver-torneos']);

        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: datos.mensaje,
          })
        }
      });
  }

}
