import { Component, OnInit, Input } from '@angular/core';
import { MenuLink } from 'src/app/models/menu-lien';

@Component({
  selector: 'j-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {

  @Input() menuLink: MenuLink;

  constructor() { }

  ngOnInit(): void {
  }

}
