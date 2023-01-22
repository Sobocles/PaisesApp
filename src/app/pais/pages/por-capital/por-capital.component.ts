import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',

})
export class PorCapitalComponent{

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = []

  constructor( private paisService: PaisService) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino ) //aca se invoca a la funcion buscar que se encuentra en el servicio pais.service, le envio el termino (osea el pais que quiero buscar) y me retorna los paises que coinciden con ese termino y guardan en la respuesta
        .subscribe( paises => {
          this.paises = paises;
         
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        });
  }

}
