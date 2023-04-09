import { Component, OnInit } from '@angular/core';
import { MenuLink } from 'src/app/models/menu-lien';
import { Store } from '@ngrx/store';
import * as AppRepasActions from 'src/app/ngrx/app-repas/app-repas.action';
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
    this.stores.dispatch(AppRepasActions.Init());
  }

}
