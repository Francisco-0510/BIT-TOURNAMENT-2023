import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import Swal from 'sweetalert2'

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

  eliminar(idVideojuego: number){
    console.log(idVideojuego);

    Swal.fire({
      title: '¿Seguro que quieres eliminar esté videojuego?',
      text: "No podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Videojuego Eliminado', '', 'success');
        this.AS.eliminarVideojuego(idVideojuego).subscribe((data: any)=>{
          console.log(data);
          this.obtenerVideojuegos();
        });
      }
    })
  }

  editar(id: number){
    console.log(id);
    this.router.navigate(['/registrar-videojuegos',id]);
  }

}
