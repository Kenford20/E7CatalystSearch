import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalysts-list',
  templateUrl: './catalysts-list.component.html',
  styleUrls: ['./catalysts-list.component.scss']
})
export class CatalystsListComponent implements OnInit {
  @Input() heroes:string[];

  constructor() { 
    
  }

  ngOnInit() {
  }

  toggleHeroData(e) {
    console.log(e)
    if(e.target.parentElement.nextElementSibling.classList.contains('hide')) {
      e.target.parentElement.nextElementSibling.classList.remove('hide');
    } else {
      e.target.parentElement.nextElementSibling.classList.add('hide');
    }
  }
}
