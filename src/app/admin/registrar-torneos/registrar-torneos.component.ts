import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';

@Component({
  selector: 'app-registrar-torneos',
  templateUrl: './registrar-torneos.component.html',
  styleUrls: ['./registrar-torneos.component.css']
})
export class RegistrarTorneosComponent implements OnInit {
  videojuegos: any;

  miFormulario: FormGroup = this.fb.group({
    nombreTorneo: ['',[Validators.required]],
    idVideojuego: ['',[Validators.required]],
    recompensa: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    encargado: ['',[Validators.required]],
    activo: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    hora: ['',[Validators.required]],
    url: ['',[Validators.required]],

  });

  constructor(private fb: FormBuilder, private router: Router, private SS: AdminServicesService ) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombreTorneo: '',
      idVideojuego: '',
      recompensa: '',
      descripcion: '',
      encargado:'',
      activo: '1',
      fecha: '',
      hora: '',
      url:'',
    });

    this.obtenerVideojuegos();

  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    this.SS.registrarTorneo(this.miFormulario.value).subscribe(
      (datos:any)=>{
        if(datos.resultado == 'OK'){
          alert(datos.mensaje);
          this.router.navigate(['ver-torneos']);

        }else{
          alert(datos.mensaje);
        }
      });
  }

  obtenerVideojuegos(){
    this.SS.verVideojuegos().subscribe((data: any)=>{
      console.log(data);
      this.videojuegos = data;
    });
  }

}
