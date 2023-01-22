import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = []

  constructor( private paisService: PaisService) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscar( this.termino ) //aca se invoca a la funcion buscar que se encuentra en el servicio pais.service, le envio el termino (osea el pais que quiero buscar) y me retorna los paises que coinciden con ese termino y guardan en la respuesta
        .subscribe( paises => {
          console.log( paises );
          this.paises = paises;
         
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        });
  }

  sugerencias( termino: string ){
    this.hayError = false;
    //TODO crear sugerencias
  }

}
