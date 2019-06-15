import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'epic7-catalyst-tool';
  catalystView = false;
  heroView = true;

  constructor() {
    
  }

  ngOnInit() {
  }

  changeHeroView(e) {
    console.log(e.target.value);
    if(e.target.value === 'heroes') {
      this.catalystView = false;
      this.heroView = true;
    } else {
      this.catalystView = true;
      this.heroView = false;
    }
  }
}
