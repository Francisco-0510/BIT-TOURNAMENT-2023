import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
  URL="http://localhost/integradora/admin/"

  constructor(private http: HttpClient) { }

  registrarTorneo(torneo:any){
    return this.http.post(`${this.URL}torneos/add.php`, JSON.stringify(torneo));
  }

  verTorneos(){
    return this.http.get(`${this.URL}/torneos/getAll.php`);
  }

  registrarVideojuegos(videojuego:any){
    return this.http.post(`${this.URL}videojuegos/add.php`, JSON.stringify(videojuego));
  }

  verVideojuegos(){
    return this.http.get(`${this.URL}/videojuegos/getAll.php`);
  }

 
}
