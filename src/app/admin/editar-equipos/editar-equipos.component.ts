import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServicesService } from 'src/app/services/client-services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-equipos',
  templateUrl: './editar-equipos.component.html',
  styleUrls: ['./editar-equipos.component.css']
})
export class EditarEquiposComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    lider: ['',[Validators.required]],
    nombreEquipo: ['',[Validators.required]],
    logoEquipo: ['',[Validators.required]],
    integrante1: ['',[Validators.required]],
    integrante2: ['',[Validators.required]],
    integrante3: ['',[Validators.required]],
    integrante4: ['',[Validators.required]],
    integrante5: ['',[Validators.required]],


  });

  constructor(private fb: FormBuilder, private router: Router, private SS: ClientServicesService ) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      lider: '',
      nombreEquipo: '',
      logoEquipo: '',
      integrante1: '',
      integrante2:'',
      integrante3: '',
      integrante4:'',
      integrante5: '',
  
    
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  save(){


    console.log(this.miFormulario.value);
    this.SS.registrarEquipo(this.miFormulario.value).subscribe(
      (datos:any)=>{
        if(datos.resultado == 'OK'){
          Swal.fire({
            icon: 'success',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['ver-equipos']);
        }else{
          Swal.fire({
            icon: 'error',
            title: datos.mensaje,
            showConfirmButton: true,
          })
        }
      });
  }
}
