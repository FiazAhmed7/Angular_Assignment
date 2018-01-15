import { Component, OnInit } from '@angular/core';

import { Menu } from "../menu.model";
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu : Menu[] = [];
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  

}
