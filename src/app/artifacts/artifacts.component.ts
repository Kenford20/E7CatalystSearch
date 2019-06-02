import { ArtifactsService } from './../core/artifacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss']
})

export class ArtifactsComponent implements OnInit {
  heroesData: [];
  heroes = [];
  artifacts = [];
  artifactIDs = [];

  constructor(private artifactsService: ArtifactsService) {
    
  }

  ngOnInit() {
    this.artifactsService.getHeroes().subscribe(heroes => {
      this.heroesData = heroes;

      for(let hero in heroes) {
        this.heroes.push(hero)

        for(let artifact in heroes[hero]) {
          if(!this.artifactIDs.includes(artifact)) {
            this.artifactIDs.push(artifact)
            this.artifacts.push(artifact.replace(/-/g, ' '));
          }
        }
      }

      console.log(this.artifactIDs);
    });
  }
}
