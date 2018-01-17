import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from '../shared/shared.module';




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
