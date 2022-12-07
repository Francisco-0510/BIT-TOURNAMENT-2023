import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-enfrentamientos',
  templateUrl: './formulario-enfrentamientos.component.html',
  styleUrls: ['./formulario-enfrentamientos.component.css']
})
export class FormularioEnfrentamientosComponent implements OnInit {
  enfrentamiento = {
    idEnfrentamiento: '',
    equipo1: '',
    equipo2: '',
    resultadoEquipo1: '',
    resultadoEquipo2: '',
    ganador:'',
    idTorneo:''
  }

  equiposIns: any;


  miFormulario: FormGroup = this.fb.group({
    idEnfrentamiento:[''],
    equipo1: ['',[Validators.required]],
    equipo2: ['',[Validators.required]],
    resultadoEquipo1:[''],
    resultadoEquipo2:[''],
    ganador:[''],
    idTorneo:[''],

    

  });

  constructor(private fb: FormBuilder, private router: Router, private SS: AdminServicesService,  private AR: ActivatedRoute) { }
  id: any;
  idE: any;


  ngOnInit(): void {
    this.idE = this.AR.snapshot.params['idE'];
    this.id = this.AR.snapshot.params['id'];
    
    if(this.idE){
      this.SS.verEnfrentamientoOne(this.idE).subscribe((data: any)=>{
        console.log(data);
        this.enfrentamiento = data;
        this.miFormulario.patchValue(this.enfrentamiento);

      });
    }



    this.miFormulario.setValue({
      idEnfrentamiento: '',
      equipo1: '',
      equipo2: '',
      resultadoEquipo1: '',
      resultadoEquipo2: '',
      ganador:'',
      idTorneo: this.id
    });

    this.obtenerEquipos();

  }


  obtenerEquipos(){
    this.SS.verEquiposIns(this.id).subscribe((data: any)=>{
      console.log(data);
      this.equiposIns = data;
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  save(){
    if(this.idE){
      Swal.fire({
        title: '¿Estas seguro de guardar los cambios? ',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No, cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Cambios Guardados', '', 'success')
          console.log(this.miFormulario.value);
          this.SS.actualizarEnfrentamiento(this.miFormulario.value).subscribe((data: any)=>{
            console.log(data);
            this.router.navigate(['ver-enfrentamientos', this.id]);
          });
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      })   
    }else{
      console.log(this.miFormulario.value);
      this.SS.registrarEnfrentamiento(this.miFormulario.value).subscribe(
        (datos:any)=>{
          if(datos.resultado == 'OK'){
            Swal.fire({
              title: '¿Estas seguro de guardar los datos?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, guardar'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
  
                  {
                    icon: 'success',
                    title: datos.mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                  }
                
                )
                this.router.navigate(['ver-enfrentamientos', this.id]);
              }
            })
  
          }else{
            Swal.fire({
              icon: 'info',
              title: datos.mensaje,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }

   

  }

}
