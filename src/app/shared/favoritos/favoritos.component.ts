import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  private comics :any ={
    data:{
      results:[]
    }
  }

  constructor(private route:ActivatedRoute, public servicio: InfoService) { }

  ngOnInit() {

      this.fun();
  }

  public fun()
  {
    this.route.params.subscribe( parametros =>{
    console.log(parametros['id']);
    //console.log(parametros['id']);

    this.servicio.loadByIdComic(parametros['id']).then( comics =>{
      this.comics = comics;

      console.log(comics);
    });

  })}

}
