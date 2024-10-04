import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa el componente Home
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ConocnenosComponent } from './conocnenos/conocnenos.component';

const routes: Routes = [
  {path:'sobreNosotros', component: SobreNosotrosComponent},
  {path:'equipo', component: ConocnenosComponent},
  {path:'nuestrosServicios', component: NuestrosServiciosComponent},
  {path:'nuestrosServicios', component: NuestrosServiciosComponent},
  { path: '', component: HomeComponent },  // Ruta base para el Home
  { path: '**', redirectTo: '', pathMatch: 'full' }  ,// Redirige cualquier ruta no encontrada al Home
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
