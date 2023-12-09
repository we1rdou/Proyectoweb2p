import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { docentescomponent } from './docentes/docentes.component';
import { logincomponent } from './inicio_sesion/login.component';
import { notificacionescomponent } from './notificaciones/notificaciones.component';
import { rtutoriacomponent } from './r_tutoria/rtutoria.component';
import { ramascomponent } from './ramas/ramas.component';
import { registercomponent } from './registro/register.component';

@NgModule({
  declarations: [
    AppComponent,
    docentescomponent,
    logincomponent,
    notificacionescomponent,
    rtutoriacomponent,
    ramascomponent,
    registercomponent
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}