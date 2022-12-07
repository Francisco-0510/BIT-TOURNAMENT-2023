import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/admin/services/admin-services.service';
import Swal from 'sweetalert2';
declare var window: any;

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {
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

  verTorneoInscribirse(i:number){
    this.router.navigate(['/inscribirse',i]);
  }

  

}
