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
      results:[]}
  }

  private pages = [1,2,3,4,5];

  constructor( public service : InfoService) {
        this.goToPage(0);
      }

pagin(page){
  //let page = 2;
  this.goToPage(page);
  console.log('onclick'+page)
}

goToPage(page){
  this.service.loadOffset(page*10,10).then(datos=>{
  this.heros = datos;
//       //console.log(datos);
console.log(this.heros)
  },
  error=>{
    console.log({error:error})
  });
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
