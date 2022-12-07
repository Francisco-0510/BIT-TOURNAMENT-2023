import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';
AdminServicesService
@Component({
  selector: 'app-enfrentamiento-estudiante',
  templateUrl: './enfrentamiento-estudiante.component.html',
  styleUrls: ['./enfrentamiento-estudiante.component.css']
})
export class EnfrentamientoEstudianteComponent implements OnInit {
  torneos: any;

  constructor(private AS: AdminServicesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTorneos();

  }

  obtenerTorneos(){
    this.AS.verTorneos().subscribe((data: any)=>{
      console.log(data);
      this.torneos = data;
    });

   
  }

  verTorneo(i:number){
    this.router.navigate(['/ver-enfrentamientos-estudiante',i]);
 }

}
