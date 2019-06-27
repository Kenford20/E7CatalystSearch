import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'epic7-catalyst-tool';
  catalystView = true;
  heroView = false;
  isLoading = false;

  constructor() {
    
  }

  ngOnInit() {
  }

  loading = () => {
    console.log(this.isLoading);
    this.isLoading = true;
    console.log(this.isLoading);
  }

  doneLoading = () => {
    console.log('done loading');
    this.isLoading = false;
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
