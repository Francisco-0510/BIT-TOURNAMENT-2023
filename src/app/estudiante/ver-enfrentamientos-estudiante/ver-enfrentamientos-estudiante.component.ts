import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';
AdminServicesService
@Component({
  selector: 'app-ver-enfrentamientos-estudiante',
  templateUrl: './ver-enfrentamientos-estudiante.component.html',
  styleUrls: ['./ver-enfrentamientos-estudiante.component.css']
})
export class VerEnfrentamientosEstudianteComponent implements OnInit {
  enfrentamientos: any[]; 


  constructor(private rutaAct:ActivatedRoute, 
    private services:AdminServicesService) { }
    id: any


  ngOnInit(): void {
    this.id= this.rutaAct.snapshot.params['id'];
    this.obtenerEnfrentamiento();
  }

  obtenerEnfrentamiento(){
    this.services.verEnfrentamiento(this.id).subscribe((data: any)=>{
      console.log(data);
      this.enfrentamientos= data;
    });
  }

}
