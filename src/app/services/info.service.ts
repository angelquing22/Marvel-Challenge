import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Md5 } from "ts-md5/dist/md5";
import { InfoPagina } from '../interfaces/Interface-info.interfaces';


var Private_Key =  "8725c8d0c0fcf45194b5d1bccd780d604fa2cd59";
var Public_key = "edb3e58df00feaf31d321b49c2bb0ab8";
var TimeStamp = new Date().getTime();
var hash = Md5.hashStr(TimeStamp + Private_Key + Public_key).toString();


@Injectable({
  providedIn: 'root'
})

export class InfoService {

  info: InfoPagina = {};

   constructor(private _http: HttpClient) {
     this.CargarInfo();
   }
   private CargarInfo(){
     this._http.get('http://gateway.marvel.com/v1/public/characters/1011334?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash)
      .subscribe( (resp : any) =>{
        //this.info = resp;
        console.log(resp.data.results['0']);
      });


    }
}
