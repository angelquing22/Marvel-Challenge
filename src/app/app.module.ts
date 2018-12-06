import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HttpClientModule} from '@angular/common/http';
import { Md5 } from "ts-md5/dist/md5";
import { ComicComponent } from './pages/comic/comic.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { appRoutingModule } from './app-routing.module';
import { FavoritosComponent } from './shared/favoritos/favoritos.component';
import {NgxAsideModule } from 'ngx-aside';
import { DetailsComponent } from './component/details/details.component';
import { MoreComponent } from './component/more/more.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    FooterComponent,
    ComicComponent,
    FavoritosComponent,
    DetailsComponent,
    MoreComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    appRoutingModule,
    NgxAsideModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
