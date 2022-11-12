import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';

@Component({
  selector: 'app-ver-torneos',
  templateUrl: './ver-torneos.component.html',
  styleUrls: ['./ver-torneos.component.css']
})
export class VerTorneosComponent implements OnInit {
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


}
