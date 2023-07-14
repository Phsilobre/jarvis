import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { MenuLink } from 'src/app/models/menu-lien';
import { ALL_MODULES } from 'src/assets/modules';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listeModules: MenuLink[] = [];

  constructor(private stores: Store) { }

  ngOnInit(): void {
    this.listeModules = ALL_MODULES;

    // TODO : voir si on peut ne le faire qu'une fois
    /* 
    TODO : à migrer
    
    this.stores.dispatch(AppRepasActions.Init());
    */
  }

}
