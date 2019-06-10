import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalysts-list',
  templateUrl: './catalysts-list.component.html',
  styleUrls: ['./catalysts-list.component.scss']
})
export class CatalystsListComponent implements OnInit {
  @Input() heroes:string[];
  @Input() hideHeroData:boolean[];

  constructor() { 
  }

  ngOnInit() {
  }

  toggleHeroData(heroIndex) {
    this.hideHeroData[heroIndex] = !this.hideHeroData[heroIndex];
  }
}
