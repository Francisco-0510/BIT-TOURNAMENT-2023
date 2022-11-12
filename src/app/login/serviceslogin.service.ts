import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesloginService {
  URL="http://localhost/integradora/auth/"


  constructor(private http: HttpClient) { }
  loginUsuarios(login:any){
    return this.http.post(`${this.URL}login.php`, JSON.stringify(login));
  }

  registro(login:any){
    return this.http.post(`${this.URL}registro.php`, JSON.stringify(login));
  }
}
