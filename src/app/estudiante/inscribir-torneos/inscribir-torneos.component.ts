import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';
import { EstudiantesServicesService } from 'src/app/estudiantes/estudiantes-services.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-inscribir-torneos',
  templateUrl: './inscribir-torneos.component.html',
  styleUrls: ['./inscribir-torneos.component.css']
})
export class InscribirTorneosComponent implements OnInit {
  torneo = {
    idTorneo: '',
  }

  inscripcion = {
    idTorneo: '',
    equipoInscrito: '',
  }

  miFormulario: FormGroup = this.fb.group({
    idTorneo: [''],
    equipoInscrito: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
 

  });

  constructor(private rutaAct:ActivatedRoute, 
    private services:AdminServicesService, private fb: FormBuilder, private router: Router, private ES: EstudiantesServicesService) { }
    id: any

  ngOnInit(): void {
    this.id= this.rutaAct.snapshot.params['id'];
    this.obtenerTorneo();

    this.miFormulario.setValue({
      idTorneo: this.id,
      equipoInscrito: '',
      
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  obtenerTorneo(){
    this.services.verTorneo(this.id).subscribe((data: any)=>{
      console.log(data);
      this.torneo= data;
    });
  }

  save(){
    console.log(this.miFormulario.value);
    this.ES.registrarInscripcion(this.miFormulario.value).subscribe(
      (datos:any)=>{
        if(datos.resultado == 'OK'){
          Swal.fire({
            icon: 'success',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['estudiante-torneo']);

        }else{
          Swal.fire({
            icon: 'error',
            title: datos.mensaje,
            text: 'Intenta inscribiendote a otro torneo',
            showConfirmButton: true,
          })
          this.router.navigate(['estudiante-torneo']);

        }
      });

  }

}
