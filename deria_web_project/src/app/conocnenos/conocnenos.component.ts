import { Component } from '@angular/core';

@Component({
  selector: 'app-conocnenos',
  templateUrl: './conocnenos.component.html',
  styleUrls: ['./conocnenos.component.css']
})
export class ConocnenosComponent {


 
  mostrarSobreMi: boolean = false;

  verSobreMi() {
    this.mostrarSobreMi = !this.mostrarSobreMi;
  }
  
  
}
