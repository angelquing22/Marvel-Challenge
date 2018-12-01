import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private heros :any ={
    data:{
      results:[]
  }
}
  constructor( public service : InfoService,
                private route : ActivatedRoute ) {

      }

private async goToPage(){
  let totalDeRegistros = 1491;
  let totalCiclos = totalDeRegistros/100;
  for (let i = 0; i < totalCiclos; i++) {
    let ord = await this.service.loadOffset(i*100,100).then(datos=>{
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

    this.route.params
    .subscribe( params =>{
      if(params.character===undefined){
        this.service.extraerTodosLosHeroes().then(heroes=>{
          this.heros.data.results=heroes;
        });
    }else{
      console.log(params['character']);
      this.service.BuscarPersonaje(params['character']).then(dat=>{
        this.heros.data.results=dat;

      }
      )
    }
    });
  }
}
