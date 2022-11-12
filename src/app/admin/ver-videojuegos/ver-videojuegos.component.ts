import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';

@Component({
  selector: 'app-ver-videojuegos',
  templateUrl: './ver-videojuegos.component.html',
  styleUrls: ['./ver-videojuegos.component.css']
})
export class VerVideojuegosComponent implements OnInit {
  videojuegos: any;


  constructor(private AS: AdminServicesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerVideojuegos();
  }

  obtenerVideojuegos(){
    this.AS.verVideojuegos().subscribe((data: any)=>{
      console.log(data);
      this.videojuegos = data;
    });
  }

}
