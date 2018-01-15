import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { ContactComponent } from "./core/contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component:AboutComponent },
    {path : 'contact', component:ContactComponent},
    {path : '**', component:NotfoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}