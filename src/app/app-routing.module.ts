import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { PlantillacvComponent } from './components/plantillacv/plantillacv.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { PanelAdminSuperUserComponent } from './components/panel-admin-super-user/panel-admin-super-user.component';
import { PanelAdminRrhhComponent } from './components/panel-admin-rrhh/panel-admin-rrhh.component';
import { PropuestaTrabajoComponent } from './components/propuesta-trabajo/propuesta-trabajo.component';
import { CreacionDePropuestaComponent } from './components/creacion-de-propuesta/creacion-de-propuesta.component';
import { AreaCvRecibidosComponent } from './components/area-cv-recibidos/area-cv-recibidos.component';
import { VistaCvRecibidoComponent } from './components/vista-cv-recibido/vista-cv-recibido.component';
import { FinPostulacionComponent } from './components/fin-postulacion/fin-postulacion.component';
import { RevisionPostulanteComponent } from './components/revision-postulante/revision-postulante.component';
import { ListadoPostulacionesComponent } from './components/listado-postulaciones/listado-postulaciones.component';
import { PowerBiComponent } from './components/power-bi/power-bi.component';
import { PostulantesAceptadosComponent } from './components/postulantes-aceptados/postulantes-aceptados.component';


const routes: Routes = [
  { path:'', component: MainComponent }, 
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'plantillacv', component: PlantillacvComponent},
  { path:'menuUser', component: LeftMenuComponent},
  { path:'dashboard', component: DashboardComponent},
  { path: 'formulario', component: FormularioContactoComponent },
  { path: 'panelAdminSuperUser', component: PanelAdminSuperUserComponent },
  { path: 'panelAdmin', component: PanelAdminRrhhComponent },
  { path: 'propuesta-detalle/:id', component: PropuestaTrabajoComponent }, // Página de detalles
  { path: 'creacionPropuesta', component: CreacionDePropuestaComponent },
  { path: 'cvRecibidos', component: AreaCvRecibidosComponent },
  { path: 'vistaCvRecibido', component: VistaCvRecibidoComponent },
  { path: 'finPostulacion', component: FinPostulacionComponent },
  { path: 'revisionPostulante/:id', component:  RevisionPostulanteComponent},
  { path: 'listadoPostulaciones', component:  ListadoPostulacionesComponent},
  { path: 'powerbi', component:  PowerBiComponent},
  { path: '', redirectTo: '/creacionPropuesta', pathMatch: 'full' }, // Redirección por defecto
  { path: 'creacionPropuesta/:id', component: CreacionDePropuestaComponent },
  { path: 'listadoPropuestas', component: ListadoPostulacionesComponent },
  { path: '', redirectTo: 'listadoPropuestas', pathMatch: 'full' }, // Ruta por defecto
  // { path: '**', redirectTo: 'listadoPropuestas' }, // Ruta de manejo de errores 404
  { path: 'postulantesAceptados', component: PostulantesAceptadosComponent }
  // { path: 'propuestaTrabajo:id', component: PropuestaTrabajoComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
