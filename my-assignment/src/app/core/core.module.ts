import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  exports:[
      AppRoutingModule,
      HeaderComponent,
      FooterComponent
  ]
})
export class CoreModule { }
