import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Md5 } from "ts-md5/dist/md5";



var Private_Key =  "8725c8d0c0fcf45194b5d1bccd780d604fa2cd59";
var Public_key = "edb3e58df00feaf31d321b49c2bb0ab8";
var TimeStamp = new Date().getTime();
var hash = Md5.hashStr(TimeStamp + Private_Key + Public_key).toString();


@Injectable({
  providedIn: 'root'
})

export class InfoService {

   constructor(private _http: HttpClientModule) {

     this._http.get('https://gateway.marvel.com/v1/public/comics' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash + '&limit=100')
         .map(res => res.json());
  }
}
