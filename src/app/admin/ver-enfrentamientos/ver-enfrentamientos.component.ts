import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';

@Component({
  selector: 'app-ver-enfrentamientos',
  templateUrl: './ver-enfrentamientos.component.html',
  styleUrls: ['./ver-enfrentamientos.component.css']
})
export class VerEnfrentamientosComponent implements OnInit {
  enfrentamientos: any[]; 

  constructor(private rutaAct:ActivatedRoute, 
    private services:AdminServicesService, private router: Router) { }
    id: any


  ngOnInit(): void {
    this.id= this.rutaAct.snapshot.params['id'];
    this.obtenerEnfrentamiento();
  }

  obtenerEnfrentamiento(){
    this.services.verEnfrentamiento(this.id).subscribe((data: any)=>{
      console.log(data);
      this.enfrentamientos= data;
    });
  }

  registrarEnfrentamientos(){
    this.router.navigate(['/form-enfrentamiento',this.id]);    
  }

  editarEnfrentamientos(iE:number){
    this.router.navigate(['/form-enfrentamiento',this.id,iE]);    
  }

}
