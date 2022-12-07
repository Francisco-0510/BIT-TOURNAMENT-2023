import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesServicesService {
  URL="http://localhost/integradora/estudiante/"

  constructor(private http: HttpClient) { }

  registrarInscripcion(inscripcion:any){
    return this.http.post(`${this.URL}addIns.php`, JSON.stringify(inscripcion));
  }
}
