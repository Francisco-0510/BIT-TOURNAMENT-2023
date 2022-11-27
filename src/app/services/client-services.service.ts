import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {
  URL="http://localhost/integradora/client/"


  constructor(private http: HttpClient) { }

  registrarEquipo(equipo:any){
    return this.http.post(`${this.URL}equipos/add.php`, JSON.stringify(equipo));
  }

  verEquipos(){
    return this.http.get(`${this.URL}equipos/getAll.php`);
  }
}
