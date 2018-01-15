import { Component, OnInit, Input } from '@angular/core';
import { Menu } from "../../menu.model";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu : Menu;
  @Input() index : number;
  
  constructor() { }

  ngOnInit() {
  }

}
