import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar-videojuegos',
  templateUrl: './registrar-videojuegos.component.html',
  styleUrls: ['./registrar-videojuegos.component.css']
})
export class RegistrarVideojuegosComponent implements OnInit {
  videojuego = {
    idVideojuego: '',
    nombreVideojuego: '',
    modalidad: '',
    descripcion: '',
    url: ''
  }

  miFormulario: FormGroup = this.fb.group({
    idVideojuego:[''],
    nombreVideojuego: ['',[Validators.required]],
    modalidad: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    url: ['',[Validators.required]],

  });

  constructor(private fb: FormBuilder, private router: Router, private SS: AdminServicesService,  private AR: ActivatedRoute) { }
  id: any;

  ngOnInit(): void {
    this.id = this.AR.snapshot.params['id'];
    if(this.id){
      this.SS.verVideojuego(this.id).subscribe((data: any)=>{
        console.log(data);
        this.videojuego = data;
        this.miFormulario.patchValue(this.videojuego);

      });
    }


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
          this.SS.actualizarVideojuego(this.miFormulario.value).subscribe((data: any)=>{
            console.log(data);
            this.router.navigate(['ver-videojuegos']);
          });
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      })   
    }else{
      console.log(this.miFormulario.value);
      this.SS.registrarVideojuegos(this.miFormulario.value).subscribe(
        (datos:any)=>{
          if(datos.resultado == 'OK'){
            Swal.fire({
              icon: 'success',
              title: datos.mensaje,
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['ver-videojuegos']);
  
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

}
