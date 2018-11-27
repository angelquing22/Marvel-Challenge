import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from "./pages/principal/principal.component";
import { ComicComponent } from "./pages/comic/comic.component";


const app_routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'comic/:id', component: ComicComponent },
    { path: ':character', component: PrincipalComponent }
    //{ path: 'opcon', component: OpcionComponent }
];

@NgModule({
  imports:[
    RouterModule.forRoot ( app_routes, { useHash: true} )
  ],
  exports: [
    RouterModule
  ]

})

export class appRoutingModule{

}
