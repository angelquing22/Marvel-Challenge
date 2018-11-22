import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor( public service : InfoService) { }

  private heros :any=[] ;
  ngOnInit() {
    let ids = ['1009610','1009189','1009220','1009718','1009262','1009215','1017327','1009664','1009351','1009685'];
    for (let i = 0; i < ids.length; i++) {
          this.service.loadById(ids[i]).then(datos=>{
          this.heros.push(datos);
          //console.log(datos);
        },
        error=>{
          console.log({error:error})
        });
    }
    console.log(this.heros)
  }
}
