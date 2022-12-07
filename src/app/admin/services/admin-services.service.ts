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
    return this.http.get(`${this.URL}torneos/getAll.php`);
  }

  registrarVideojuegos(videojuego:any){
    return this.http.post(`${this.URL}videojuegos/add.php`, JSON.stringify(videojuego));
  }

  verVideojuegos(){
    return this.http.get(`${this.URL}videojuegos/getAll.php`);
  }
  verVideojuego(id: number){
    return this.http.get(`${this.URL}videojuegos/getOne.php?idVideojuego=${id}`);
  }
  

  eliminarVideojuego(idVideojuego: any){
    return this.http.get(`${this.URL}videojuegos/delete.php?idVideojuego=${idVideojuego}`);

  }

  actualizarVideojuego(form: any){
    return this.http.post(`${this.URL}videojuegos/update.php`, JSON.stringify(form));
  }

  verTorneo(id: number){
    return this.http.get(`${this.URL}torneos/getOne.php?idTorneo=${id}`);
  }

  eliminarTorneo(idTorneo: any){
    return this.http.get(`${this.URL}torneos/delete.php?idTorneo=${idTorneo}`);
  }

  actualizarTorneo(form: any){
    return this.http.post(`${this.URL}torneos/update.php`, JSON.stringify(form));
  }

  verEnfrentamiento(id: number){
    return this.http.get<any[]>(`${this.URL}enfren/getAll.php?idTorneo=${id}`);
  }

  verEnfrentamientoOne(id: number){
    return this.http.get(`${this.URL}enfren/getOne.php?idEnfrentamiento=${id}`);
  }

  actualizarEnfrentamiento(form: any){
    return this.http.post(`${this.URL}enfren/update.php`, JSON.stringify(form));
  }

  verEquiposIns(id: number){
    return this.http.get(`${this.URL}enfren/EquiposIns.php?idTorneo=${id}`);
  }

  registrarEnfrentamiento(enfrentamiento:any){
    return this.http.post(`${this.URL}enfren/add.php`, JSON.stringify(enfrentamiento));
  }

  
  

  

  
 
}
