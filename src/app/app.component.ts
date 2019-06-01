import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'epic7-catalyst-tool';


  ngOnInit() {
    // setTimeout(() => {
    //   this.title = 'abcdef';
    // }, 1000);
  }
}
