import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from "./home/home.component";
import { MenuService } from './menu/menu.service';
import { MenuListComponent } from "./menu/menu-list/menu-list.component";
import { MenuItemComponent } from "./menu/menu-list/menu-item/menu-item.component";
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuListComponent,
    MenuItemComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
