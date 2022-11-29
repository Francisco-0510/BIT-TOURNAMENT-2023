import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ver-torneos',
  templateUrl: './ver-torneos.component.html',
  styleUrls: ['./ver-torneos.component.css']
})
export class VerTorneosComponent implements OnInit {
  torneos: any;
  usuario = {
    nombre: ''
  }
  constructor(private AS: AdminServicesService, private router: Router, private CS: CookieService) { }

  ngOnInit(): void {
    this.obtenerTorneos();
    this.usuario.nombre = this.CS.get('nombre');
    console.log(this.usuario);
  }

  obtenerTorneos(){
    this.AS.verTorneos().subscribe((data: any)=>{
      console.log(data);
      this.torneos = data;
    });
  }

  verTorneo(i:number){
    this.router.navigate(['/detalle-torneo',i]);
  
 }



}
