import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  videojuegos: any;

  constructor(private AS: AdminServicesService) { }

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
