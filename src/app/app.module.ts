import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AltasComponent } from './admin/altas/altas.component';
import { RegistrarTorneosComponent } from './admin/registrar-torneos/registrar-torneos.component';
import { RegistrarVideojuegosComponent } from './admin/registrar-videojuegos/registrar-videojuegos.component';
import { VerEquiposComponent } from './admin/ver-equipos/ver-equipos.component';
import { EditarEquiposComponent } from './admin/editar-equipos/editar-equipos.component';
import { VerVideojuegosComponent } from './admin/ver-videojuegos/ver-videojuegos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioNormalComponent } from './general/inicio-normal/inicio-normal.component';
import { MenuaAdminComponent } from './shared/menua-admin/menua-admin.component';
import { VerTorneosComponent } from './admin/ver-torneos/ver-torneos.component';
import { VerEnfrentamientosComponent } from './admin/ver-enfrentamientos/ver-enfrentamientos.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AltasComponent,
    RegistrarTorneosComponent,
    RegistrarVideojuegosComponent,
    VerEquiposComponent,
    EditarEquiposComponent,
    VerVideojuegosComponent,
    InicioNormalComponent,
    MenuaAdminComponent,
    VerTorneosComponent,
    VerEnfrentamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
