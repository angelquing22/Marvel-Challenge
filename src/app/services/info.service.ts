import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Md5 } from "ts-md5/dist/md5";


var Private_Key =  "8725c8d0c0fcf45194b5d1bccd780d604fa2cd59";
var Public_key = "edb3e58df00feaf31d321b49c2bb0ab8";
var TimeStamp = new Date().getTime();
var hash = Md5.hashStr(TimeStamp + Private_Key + Public_key).toString();


@Injectable({
  providedIn: 'root'
})

export class InfoService {

   constructor(private _http: HttpClient) {

     console.log('Info');

     this._http.get('http://gateway.marvel.com/v1/public/characters?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash + '&limit=100')
     .subscribe( resp =>{

       console.log(resp);
     });
  }
}
