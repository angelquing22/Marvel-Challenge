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

  personajes: any[] = [];
  personajesFiltrado: any[] = [];

  //info: InfoPagina = {};


  constructor(private _http: HttpClient) {
   //  this.CargarInfo();
  }


  public async BuscarPersonaje  ( character : string){
    let personajesFiltrado :any[]=[];
    if(this.personajes.length == 0){
      // personajesFiltrado = await this.loadPerson();
      await this.extraerTodosLosHeroes().then( (personajes:any)=>{
        this.personajes = personajes;
        personajesFiltrado = this.FiltrarPersonaje(character);
      });
    } else{
      //Aplicar filtro
      personajesFiltrado =this.FiltrarPersonaje(character);
    }
    return personajesFiltrado;
  }

  private FiltrarPersonaje  (character: string){
    console.log(this.personajes);
    let personajesFiltrado :any[]=[];
    for (let i = 0; i < this.personajes.length; i++) {
        let personaje = this.personajes[i];
        if(personaje.name.indexOf(character)>=0){
          personajesFiltrado.push(personaje);
        }
    }

    // this.personajes.forEach( personaje=>{
    //   if(personaje.name.indexOf(character)>=0){
    //     this.personajesFiltrado.push(personaje);
    //   }
    // });
      return personajesFiltrado;
  }

  public async extraerTodosLosHeroes(){
    let totalDeRegistros = 1491;
    let totalCiclos = totalDeRegistros/100;
    let funcionesDePromesas :any[]=[];
    let heroes:any[]=[];

    for (let i = 0; i < totalCiclos; i++) {
      funcionesDePromesas[i]=(this.loadOffset(i*100,100));
    }
  // for (let i = 0; i < funcionesDePromesas.length; i++) {
  //     await funcionesDePromesas[i].then(resp=>{
  //       heroes= heroes.concat(resp['data']['results']);
  //     });
  // }
  await Promise.all(funcionesDePromesas).then(respHeroes=>{
    for (let i = 0; i < respHeroes.length; i++) {
       heroes= heroes.concat(respHeroes[i]['data']['results']);
    }
  }).catch(error=>{console.log(error)})
  this.personajes = heroes;
  return heroes;
    //console.log(this.heros)
  }



  public  loadPerson (){

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

  public loadById2(id){
    return new Promise((resolve,reject)=>{
      try {
        this._http.get('http://gateway.marvel.com/v1/public/characters/'+id+'?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash)
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

  public loadByIdComic(id){
    return new Promise((resolve,reject)=>{
      try {
        this._http.get('http://gateway.marvel.com/v1/public/comics/'+id+'?ts=' + TimeStamp + '&apikey=' + Public_key + '&hash=' + hash)
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
