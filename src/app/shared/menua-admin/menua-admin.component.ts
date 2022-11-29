import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menua-admin',
  templateUrl: './menua-admin.component.html',
  styleUrls: ['./menua-admin.component.css']
})
export class MenuaAdminComponent implements OnInit {

  constructor( private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);


  }

}
