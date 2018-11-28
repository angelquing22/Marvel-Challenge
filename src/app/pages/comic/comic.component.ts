import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  private comics :any ={
    data:{
      results:[
        {

        }
      ]
    }
  }

  private heros :any ={
    data:{
      results:[]
  }
}

  // constructor( public service : InfoService) {
  // //  this.comics =params.comocs
  // }

  constructor ( private route:ActivatedRoute, public servicio: InfoService)
  {
    this.goToPage();
  }

  private async goToPage(){
    let totalDeRegistros = 1491;
    let totalCiclos = totalDeRegistros/100;
    for (let i = 0; i < totalCiclos; i++) {
      let ord = await this.servicio.loadOffset(i*100,100).then(datos=>{
        let dat:any = datos;
        this.heros['data']['results']= this.heros['data']['results'].concat(dat['data']['results']);
        //this.heros.data.resuts;
        //console.log(datos);
      },
      error=>{
        //console.log({error:error})
      });
    }
    //console.log(this.heros)
  }


  ngOnInit() {
    this.route.params.subscribe( parametros =>{
      console.log(parametros['id']);
      //console.log(parametros['id']);

      this.servicio.loadById(parametros['id']).then( comics =>{
        this.comics = comics;

        console.log(comics);
      });

    })

  }

}
