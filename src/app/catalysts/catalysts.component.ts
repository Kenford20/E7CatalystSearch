import { CatalystsService } from '../core/catalysts.service';
import { Component, OnInit } from '@angular/core';
import { IHeroes, ICatalysts } from '../shared/interfaces';

@Component({
  selector: 'app-catalysts',
  templateUrl: './catalysts.component.html',
  styleUrls: ['./catalysts.component.scss']
})

export class CatalystsComponent implements OnInit {
  heroes:any[] = [];
  filteredHeroes:any[] = [];
  catalysts:string[] = [];
  filteredCatalysts:any[] = [];
  catalystIDs:string[] = [];

  constructor(private catalystsService: CatalystsService) {
    
  }

  ngOnInit() {
    this.catalystsService.getHeroes().subscribe(heroesData => {
      for(let hero in heroesData) {
        let heroData:IHeroes = {
          name: hero,
          catalysts: []
        }
        for(let catalyst in heroesData[hero]) {
          let catalystData:ICatalysts = {
            id: catalyst,
            skills: []
          }
          for(let skills in heroesData[hero][catalyst]) {
            catalystData.skills.push(heroesData[hero][catalyst][skills]);
          }
          heroData.catalysts.push(catalystData);
        }
        this.heroes.push(heroData);


        // for(let catalyst in heroes[hero]) {
        //   if(!this.catalystIDs.includes(catalyst)) {
        //     this.catalystIDs.push(catalyst)
        //     this.catalysts.push(catalyst.replace(/-/g, ' '));
        //   }
        // }
      }
      this.filteredHeroes = this.heroes.sort();
      console.log(this.heroes);
    });
  }

  filter(input) {
    this.filteredHeroes = this.heroes.map(hero => {
      return hero.name.toLowerCase().indexOf(input.toLowerCase()) >= 0 ? hero : '';
    }).sort();
  }
}
