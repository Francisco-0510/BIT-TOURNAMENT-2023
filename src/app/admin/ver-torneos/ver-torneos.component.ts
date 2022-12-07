import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from '../services/admin-services.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2'

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

 eliminar(idTorneo: number){
  console.log(idTorneo);

  Swal.fire({
    title: '¿Seguro que quieres eliminar esté torneo?',
    text: "No podras revertir esto",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Videojuego Eliminado', '', 'success');
      this.AS.eliminarTorneo(idTorneo).subscribe((data: any)=>{
        console.log(data);
        this.obtenerTorneos();
      });
    }
  })
 }

 editar(id: number){
  console.log(id);
  this.router.navigate(['/registrar-torneos',id]);
}



}
