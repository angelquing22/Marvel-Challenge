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

  // constructor( public service : InfoService) {
  // //  this.comics =params.comocs
  // }

  constructor ( private route:ActivatedRoute, public servicio: InfoService){}

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
