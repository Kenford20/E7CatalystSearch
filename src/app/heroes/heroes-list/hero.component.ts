import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() catalysts:string[];
  @Input() hideHeroData:boolean[];
  @Input() index:number;

  constructor() { 
  }

  ngOnInit() {
  }

  toggleHeroData(heroIndex) {
    this.hideHeroData[heroIndex] = !this.hideHeroData[heroIndex];
  }
}
