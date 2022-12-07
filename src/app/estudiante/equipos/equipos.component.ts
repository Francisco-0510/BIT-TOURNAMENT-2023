import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServicesService } from 'src/app/services/client-services.service';
ClientServicesService
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: any;

  constructor(private CS: ClientServicesService , private router: Router) { }

  ngOnInit(): void {
    this.obtenerEquipos();

  }

  obtenerEquipos(){
    this.CS.verEquipos().subscribe((data: any)=>{
      console.log(data);
      this.equipos = data;
    });
  }

}
