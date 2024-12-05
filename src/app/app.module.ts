import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { MainComponent } from './components/main/main.component';
import { PlantillacvComponent } from './components/plantillacv/plantillacv.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideHttpClient } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { PropuestaTrabajoComponent } from './components/propuesta-trabajo/propuesta-trabajo.component';
import { CreacionDePropuestaComponent } from './components/creacion-de-propuesta/creacion-de-propuesta.component';
import { AreaCvRecibidosComponent } from './components/area-cv-recibidos/area-cv-recibidos.component';
import { VistaCvRecibidoComponent } from './components/vista-cv-recibido/vista-cv-recibido.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelAdminSuperUserComponent } from './components/panel-admin-super-user/panel-admin-super-user.component';
import { PanelAdminRrhhComponent } from './components/panel-admin-rrhh/panel-admin-rrhh.component';
import { FinPostulacionComponent } from './components/fin-postulacion/fin-postulacion.component';
import { RevisionPostulanteComponent } from './components/revision-postulante/revision-postulante.component';
import { ListadoPostulacionesComponent } from './components/listado-postulaciones/listado-postulaciones.component';
import { PowerBiComponent } from './components/power-bi/power-bi.component';
import { PostulantesAceptadosComponent } from './components/postulantes-aceptados/postulantes-aceptados.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    PlantillacvComponent,
    LeftMenuComponent,
    DashboardComponent,
    FormularioContactoComponent,
    PropuestaTrabajoComponent,
    CreacionDePropuestaComponent,
    AreaCvRecibidosComponent,
    VistaCvRecibidoComponent,
    FooterComponent,
    PanelAdminSuperUserComponent,
    PanelAdminRrhhComponent,
    FinPostulacionComponent,
    RevisionPostulanteComponent,
    ListadoPostulacionesComponent,
    PowerBiComponent,
    PostulantesAceptadosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(), provideOAuthClient(), provideHttpClient(),
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
