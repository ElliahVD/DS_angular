import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FranceComponent} from "./france/france.component";
import {DepartementComponent} from "./departement/departement.component";

const routes: Routes = [
  {path: '', component:FranceComponent},
  {path:'', component:DepartementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
