import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesloginService } from 'src/app/login/serviceslogin.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';
  
  emailReq(){
    return this.miFormulario.controls['usuario']?.errors?.['required'] &&
           this.miFormulario.controls['usuario']?.touched;
  }
  
  emailPattern(){
    return this.miFormulario.controls['usuario']?.errors?.['pattern'] &&
           this.miFormulario.controls['usuario']?.touched;
  }
    
    miFormulario: FormGroup = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(25) ]],
      apellidos: ['',[Validators.required,  Validators.minLength(6),Validators.maxLength(35)]],
      usuario: ['',[Validators.required]],
      contrasenia: ['',[Validators.required, Validators.minLength(6)]],
      tipoUser: ['',[Validators.required]],
    });
  
    constructor(private fb: FormBuilder, private router: Router, private SS: ServicesloginService) { }
  
    ngOnInit(): void {
      this.miFormulario.setValue({
        nombre: '',
        apellidos: '',
        usuario: '',
        contrasenia: '',
        tipoUser: '1',
      });
    }
  
    campoValido(campo: string){
      return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  
    }
  
    save(){
      console.log(this.miFormulario.value);
      this.SS.registro(this.miFormulario.value).subscribe(
        (datos:any)=>{
          if(datos.resultado == 'OK'){
            Swal.fire({
              icon: 'success',
              title: datos.mensaje,
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['login']);
          }else{
            Swal.fire({
              icon: 'error',
              title: datos.mensaje,
              text: 'Intenta nuevamente',
              showConfirmButton: false,
              timer: 1500
            })
  
          }
        });
    }
  }
