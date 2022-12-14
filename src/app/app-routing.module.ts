import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VerVideojuegosComponent } from './admin/ver-videojuegos/ver-videojuegos.component';
import { VerEquiposComponent } from './admin/ver-equipos/ver-equipos.component';
import { VerTorneosComponent } from './admin/ver-torneos/ver-torneos.component';
import { VerEnfrentamientosComponent } from './admin/ver-enfrentamientos/ver-enfrentamientos.component';
import { RegistrarTorneosComponent } from './admin/registrar-torneos/registrar-torneos.component';
import { RegistrarVideojuegosComponent } from './admin/registrar-videojuegos/registrar-videojuegos.component';
import { EditarEquiposComponent } from './admin/editar-equipos/editar-equipos.component';
import { InicioNormalComponent } from './general/inicio-normal/inicio-normal.component';
import { DetalleEnfrentamientoComponent } from './general/detalle-enfrentamiento/detalle-enfrentamiento.component';
import { DetalleEquiposComponent } from './general/detalle-equipos/detalle-equipos.component';
import { DetalleTorneoComponent } from './general/detalle-torneo/detalle-torneo.component';
import { DetalleVideojuegosComponent } from './general/detalle-videojuegos/detalle-videojuegos.component';
import { TorneosComponent } from './estudiante/torneos/torneos.component';
import { InscribirTorneosComponent } from './estudiante/inscribir-torneos/inscribir-torneos.component';
import { TorneosEnfrentamientosComponent } from './admin/torneos-enfrentamientos/torneos-enfrentamientos.component';
import { FormularioEnfrentamientosComponent } from './admin/formulario-enfrentamientos/formulario-enfrentamientos.component';
import { VideojuegosComponent } from './estudiante/videojuegos/videojuegos.component';
import { EquiposComponent } from './estudiante/equipos/equipos.component';
import { EnfrentamientoEstudianteComponent } from './estudiante/enfrentamiento-estudiante/enfrentamiento-estudiante.component';
import { VerEnfrentamientosEstudianteComponent } from './estudiante/ver-enfrentamientos-estudiante/ver-enfrentamientos-estudiante.component';
LoginComponent;

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegisterComponent,
  },
  {
    path: 'dashboard-admin',
    component: DashboardComponent,
  },
  {
    path: 'ver-videojuegos',
    component: VerVideojuegosComponent,
  },
  
  {
    path: 'ver-equipos',
    component: VerEquiposComponent,
  },
  {
    path: 'ver-torneos',
    component: VerTorneosComponent,
  },
  {
    path: 'ver-enfrentamientos/:id',
    component: VerEnfrentamientosComponent,
  },
  {
    path: 'ver-enfrentamientos-estudiante/:id',
    component: VerEnfrentamientosEstudianteComponent,
  },
  {
    path: 'registrar-torneos',
    component: RegistrarTorneosComponent,
  },
  {
    path: 'registrar-torneos/:id',
    component: RegistrarTorneosComponent,
  },
  {
    path: 'registrar-videojuegos',
    component: RegistrarVideojuegosComponent,
  },
  {
    path: 'registrar-videojuegos/:id',
    component: RegistrarVideojuegosComponent,
  },
  {
    path: 'editar-equipos',
    component: EditarEquiposComponent,
  },
  {
    path: 'inicio-normal',
    component: InicioNormalComponent,
  },
  {
    path: 'detalle-enfrentamiento',
    component: DetalleEnfrentamientoComponent
  },
  {
    path: 'detalle-equipo',
    component: DetalleEquiposComponent
  },
  {
    path: 'detalle-torneo/:id',
    component: DetalleTorneoComponent
  },
  {
    path: 'detalle-videojuego',
    component: DetalleVideojuegosComponent
  },
  {
    path: 'estudiante-torneo',
    component: TorneosComponent
  },
  {
    path: 'inscribirse/:id',
    component: InscribirTorneosComponent
  },
  {
    path: 'torneos-enfrentamientos',
    component: TorneosEnfrentamientosComponent
  },
  {
    path: 'form-enfrentamiento/:id',
    component: FormularioEnfrentamientosComponent
  },
  {
    path: 'form-enfrentamiento/:id/:idE',
    component: FormularioEnfrentamientosComponent
  },
  {
    path: 'estudiante-videojuegos',
    component: VideojuegosComponent
  },
  {
    path: 'estudiante-enfrentamiento',
    component: EnfrentamientoEstudianteComponent
  },
  {
    path: 'estudiante-equipos',
    component: EquiposComponent
  },
  
  
  
  
  
  
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio-normal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
