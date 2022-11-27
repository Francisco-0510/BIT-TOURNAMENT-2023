import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServicesService } from 'src/app/services/client-services.service';

@Component({
  selector: 'app-ver-equipos',
  templateUrl: './ver-equipos.component.html',
  styleUrls: ['./ver-equipos.component.css']
})
export class VerEquiposComponent implements OnInit {
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
