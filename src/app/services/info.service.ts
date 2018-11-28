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

  personaje: any[] = [];
  personajesFiltrado: any[] = [];

  //info: InfoPagina = {};


  constructor(private _http: HttpClient) {
   //  this.CargarInfo();
  }


  BuscarPersonaje( character : string){

    if(this.personaje.length == 0){
      this.loadPerson().then( ()=>{
        this.FiltrarPersonaje(character);
      });
    } else{
      //Aplicar filtro
      this.FiltrarPersonaje(character);
    }
    this.personajesFiltrado = this.personaje.filter( person =>{
      return true;
    });
    console.log(this.personajesFiltrado);
  }

  private FiltrarPersonaje(character: string){
    console.log(this.personaje);
    this.personaje.forEach( personaje=>{
      if(personaje.name.indexOf(character)>=0){
        this.personajesFiltrado.push(personaje);
      }
    });
  }



  public loadPerson(){
    return new Promise((resolve,reject)=>{
      try {
        //http://gateway.marvel.com/v1/public/characters?apikey=edb3e58df00feaf31d321b49c2bb0ab8&ts=2&hash=751904b871923715ddbb98a17da33888&offset=0&limit=10
       this._http.get('http://gateway.marvel.com/v1/public/characters?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash)
       .subscribe((resp : any) =>{
         //resolve(resp.data.results['0']);
         resolve(resp);
         // console.log({hero:resp.data.results['0']});
       });
     } catch (error) {
       reject(error);
     }
    });
  }

  public loadById(id){
    return new Promise((resolve,reject)=>{
      try {
        this._http.get('http://gateway.marvel.com/v1/public/characters/'+id+'/comics?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash)
       .subscribe((resp : any) =>{
         //resolve(resp.data.results['0']);
         resolve(resp);
         // console.log({hero:resp.data.results['0']});
       });
     } catch (error) {
       reject(error);
     }
    });
  }

  public loadOffset(offset,limit){
    return new Promise((resolve,reject)=>{
      try {
        //http://gateway.marvel.com/v1/public/characters?apikey=edb3e58df00feaf31d321b49c2bb0ab8&ts=2&hash=751904b871923715ddbb98a17da33888&offset=0&limit=10
       this._http.get('http://gateway.marvel.com/v1/public/characters?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash + '&offset='+offset+ '&limit='+ limit)
       .subscribe((resp : any) =>{
         //resolve(resp.data.results['0']);
         resolve(resp);
         // console.log({hero:resp.data.results['0']});
       });
     } catch (error) {
       reject(error);
     }
    });
  }


}
