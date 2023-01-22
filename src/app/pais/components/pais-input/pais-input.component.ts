import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //onDebounce se va a emitir cuando la persona deja de escribir
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject(); 

  termino: string = '';

  ngOnInit(){
      this.debouncer
        .pipe(debounceTime(300)) //cuantas milesimas de segundo quiero esprar antes de emitir el siguiente valor       
        .subscribe(valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar(){
      this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino ); //cada vez que se presiona una tecla en el input se imprime en consola todo el termino + la letra nuevo añadida y asi sucesivamente si se sigue presionando nuevas letras (poreso el next de siguiente letra)
    /*const valor = event.target.value;
    console.log(valor);
    console.log(this.termino)*/
  }

}
