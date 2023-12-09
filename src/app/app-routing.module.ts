import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { logincomponent } from './inicio_sesion/login.component';
import { registercomponent } from './registro/register.component';
import { ramascomponent } from './ramas/ramas.component';
import { rtutoriacomponent} from './r_tutoria/rtutoria.component';
import { docentescomponent } from './docentes/docentes.component';
import { notificacionescomponent } from './notificaciones/notificaciones.component';

export const routes: Routes = [
    {path:"", redirectTo: "login", pathMatch:"full"},
    {path:'login',component:logincomponent},
    {path:'register',component:registercomponent},
    {path:'ramas',component:ramascomponent},
    {path:'rtutoria',component:rtutoriacomponent},
    {path:'docentes', component:docentescomponent},
    {path:'notificaciones',component:notificacionescomponent},
    {path:"**", redirectTo:"login", pathMatch:"full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}