import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
@Component({
  selector: 'app-torneos-enfrentamientos',
  templateUrl: './torneos-enfrentamientos.component.html',
  styleUrls: ['./torneos-enfrentamientos.component.css']
})
export class TorneosEnfrentamientosComponent implements OnInit {
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
    this.router.navigate(['/ver-enfrentamientos',i]);
 }

}
