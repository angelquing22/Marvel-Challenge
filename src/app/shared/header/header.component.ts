import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public servicio: InfoService,
                private router: Router) { }

  ngOnInit() {
  }

  searchCharacter ( character: string ){

    if(character.length<1){
      return;
    }
    this.router.navigate(['/', character]);

  }
}
