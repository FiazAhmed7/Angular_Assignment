import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { ContactComponent } from "./core/contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { CommonModule } from "@angular/common";

const appRoutes : Routes = [
    {path : '', component : HomeComponent, pathMatch : 'full'},
    {path : 'about', component:AboutComponent },
    {path : 'contact', component:ContactComponent},
    //another path for menu goes here...
    {path : '**', component:NotfoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes),
    CommonModule],
    exports:[RouterModule]
})
export class AppRoutingModule{

}