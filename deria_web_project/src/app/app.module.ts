import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConocnenosComponent } from './conocnenos/conocnenos.component';
import { HomeServicesComponent } from './home-services/home-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreNosotrosComponent,
    NuestrosServiciosComponent,
    ContactoComponent,
    ConocnenosComponent,
    HomeServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
