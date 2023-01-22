import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //lo de abajo solo funciona con los li de ese componente sidebar, es para que sea una mano el cursor
  styles: [ 
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
