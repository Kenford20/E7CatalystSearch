import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalyst',
  templateUrl: './catalyst.component.html',
  styleUrls: ['./catalyst.component.scss']
})
export class CatalystComponent implements OnInit {
  @Input() heroes:any[];
  @Input() locations:any[];
  @Input() hideCatalystData:boolean[];
  @Input() index:number;

  constructor() { 
  }

  ngOnInit() {
  }

  toggleHeroData(heroIndex) {
    this.hideCatalystData[heroIndex] = !this.hideCatalystData[heroIndex];
  }
}
