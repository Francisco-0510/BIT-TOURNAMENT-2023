import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';
AdminServicesService

@Component({
  selector: 'app-detalle-torneo',
  templateUrl: './detalle-torneo.component.html',
  styleUrls: ['./detalle-torneo.component.css']
})
export class DetalleTorneoComponent implements OnInit {

  torneo = {
    idTorneo: '',
    nombreTorneo: '',
    idVideojuego: '',
    encargado: '',
    recompensa: '',
    descripcion: '',
    activo: '',
    fecha: '',
    hora: '',
    url: '',
    urlT: '',
    reglas: '',
    precio: '',
    tipoTorneo: '',
    tamanoEquipo: '',
  }
 

  constructor(private rutaAct:ActivatedRoute, 
    private services:AdminServicesService) { }
    id: any


  ngOnInit(): void {
    this.id= this.rutaAct.snapshot.params['id'];
    this.obtenerTorneo();
    
  }

  obtenerTorneo(){
    this.services.verTorneo(this.id).subscribe((data: any)=>{
      console.log(data);
      this.torneo= data;
    });
  }

}
