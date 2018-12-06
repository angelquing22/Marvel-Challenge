import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private comics :any ={
    data:{
      results:[ ]
    }
  }

  constructor(private route:ActivatedRoute, public servicio: InfoService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros =>{
      console.log(parametros['id']);
      //console.log(parametros['id']);

      this.servicio.loadById2(parametros['id']).then( comics =>{
        this.comics = comics;

        console.log(comics);
      });

    })

  }
}
