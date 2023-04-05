import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuLink } from 'src/app/models/menu-lien';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  @Input() items: MenuLink[] = [];
  @Input() x: number;
  @Input() y: number;

  @Output() contextMenuClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(event, data): void {
    this.contextMenuClick.emit({event, data});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
