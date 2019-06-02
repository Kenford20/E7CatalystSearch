import { IHeroes } from './shared/interfaces';
import { ArtifactsService } from './core/artifacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'epic7-catalyst-tool';

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
