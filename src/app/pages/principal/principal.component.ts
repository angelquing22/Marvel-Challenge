import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private heros :any ={
    data:{
      results:[ { comics:{ items: []} } ]
  } }



  //private pages = [1,2,3,4,5];

  constructor( public service : InfoService) {
      this.goToPage();
      }

// pagin(page){
//   //let page = 2;
//   this.goToPage(page);
//   console.log('onclick'+page)
// }

//pageActual: number = 1;

//goToPage(){
  // this.service.loadOffset(10,10).then(datos=>{
  // this.heros = datos;
  // //console.log(datos);
  // console.log(this.heros)
  // },
  // error=>{
  //   console.log({error:error})
  // });

private async goToPage(){
  let totalDeRegistros = 1491;
  let totalCiclos = totalDeRegistros/100;
  for (let i = 0; i < totalCiclos; i++) {

  let ord = await this.service.loadOffset(i*100,100).then(datos=>{
    let dat:any = datos;
    this.heros['data']['results']= this.heros['data']['results'].concat(dat['data']['results']);
    //this.heros.data.resuts;

    //Read image
    // let thumbnail = this.heros.data.results[0].thumbnail;
    // let imgAN = thumbnail.path + '/standard_large' + '.' + thumbnail.extension;

  console.log(datos);
    },
     error=>{
       console.log({error:error})
     });
 }
 console.log(this.heros)
}

  ngOnInit() {



  //   let ids = ['1009610','1009189','1009220','1009718','1009262','1009215','1017327','1009664','1009351','1009685'];
  //   for (let i = 0; i < ids.length; i++) {
  //          this.service.loadById(ids[i]).then(datos=>{
  //          this.heros.push(datos);
  //   //       //console.log(datos);
  //        },
  //        error=>{
  //          console.log({error:error})
  //        });
  //    }
  //   console.log(this.heros)
  }
}
