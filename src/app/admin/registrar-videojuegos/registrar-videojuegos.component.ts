import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
@Component({
  selector: 'app-registrar-videojuegos',
  templateUrl: './registrar-videojuegos.component.html',
  styleUrls: ['./registrar-videojuegos.component.css']
})
export class RegistrarVideojuegosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombreVideojuego: ['',[Validators.required]],
    modalidad: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    url: ['',[Validators.required]],

  });

  constructor(private fb: FormBuilder, private router: Router, private SS: AdminServicesService ) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      nombreVideojuego: '',
      modalidad: '',
      descripcion: '',
      url:'',
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    this.SS.registrarVideojuegos(this.miFormulario.value).subscribe(
      (datos:any)=>{
        if(datos.resultado == 'OK'){
          alert(datos.mensaje);
          this.router.navigate(['ver-videojuegos']);

        }else{
          alert(datos.mensaje);
        }
      });
  }

}
