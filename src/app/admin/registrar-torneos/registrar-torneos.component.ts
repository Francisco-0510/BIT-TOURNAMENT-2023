import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar-torneos',
  templateUrl: './registrar-torneos.component.html',
  styleUrls: ['./registrar-torneos.component.css']
})
export class RegistrarTorneosComponent implements OnInit {
  torneo = {
    idTorneo: '',
    nombreTorneo: '',
    idVideojuego: '',
    encargado: '',
    recompensa: '',
    descripcion:'',
    fecha:'',
    hora: '',
    url: '',
    reglas:'',
    precio:'',
    tipoTorneo: '',
    tamanoEquipo: ''

  }

  videojuegos: any;

  miFormulario: FormGroup = this.fb.group({
    idTorneo: ['',],
    nombreTorneo: ['',[Validators.required], ,[Validators.maxLength(50)]],
    idVideojuego: ['',[Validators.required]],
    recompensa: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    encargado: ['',[Validators.required]],
    activo: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    hora: ['',[Validators.required]],
    urlT: ['',[Validators.required]],
    precio: ['',[Validators.required]],
    tamanoEquipo: ['',[Validators.required]],
    reglas: ['',[Validators.required]],
    tipoTorneo: ['',[Validators.required]],

  });

  constructor(private fb: FormBuilder, private router: Router, private SS: AdminServicesService,  private AR: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.id = this.AR.snapshot.params['id'];
    if(this.id){
      this.SS.verTorneo(this.id).subscribe((data: any)=>{
        console.log(data);
        this.torneo = data;
        this.miFormulario.patchValue(this.torneo);

      });
    }

    this.miFormulario.setValue({
      idTorneo:'',
      nombreTorneo: '',
      idVideojuego: '',
      recompensa: '',
      descripcion: '',
      encargado:'',
      activo: '1',
      fecha: '',
      hora: '',
      urlT:'',
      precio:'',
      tamanoEquipo: '',
      reglas: '',
      tipoTorneo:'',
    });

    this.obtenerVideojuegos();

  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  save(){
    if(this.id){
      Swal.fire({
        title: '¿Estas seguro de guardar los cambios? ',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No, cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Cambios Guardados', '', 'success')
          console.log(this.miFormulario.value);
          this.SS.actualizarTorneo(this.miFormulario.value).subscribe((data: any)=>{
            console.log(data);
            this.router.navigate(['ver-torneos']);
          });
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      }) 
    }else{
      
    console.log(this.miFormulario.value);
    this.SS.registrarTorneo(this.miFormulario.value).subscribe(
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
                datos.mensaje,
                '',
                'success'
              )
              this.router.navigate(['ver-torneos']);
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

  obtenerVideojuegos(){
    this.SS.verVideojuegos().subscribe((data: any)=>{
      console.log(data);
      this.videojuegos = data;
    });
  }

}
