
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',

})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute, private paisService : PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params //esta recibiendo un params
        .pipe(
          switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ), //recibe un observable y se retorna un observable
           tap(console.log) 
        )
        .subscribe( pais =>  this.pais = pais );

        // ({ id }) a eso se le llama desestruracion ose en vex de recibir el params completo recibo solamente el id


      //FORMA 1 DE HACERLO
     /* this.activatedRoute.params
      .subscribe( ({ id }) => { //se captura el id del pais
        console.log(id);

        this.paisService.getPaisPorAlpha( id ) //se envia ese id a la funcion en el servicio para que se retorne el pais
          .subscribe( pais => {
            console.log(pais);
          });
      }); */
  }
}