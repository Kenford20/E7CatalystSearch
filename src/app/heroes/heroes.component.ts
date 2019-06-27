import { CatalystsService } from '../core/catalysts.service';
import { Component, OnInit, Input } from '@angular/core';
import { IHeroes, ICatalyst, ILocations, ILocation } from '../shared/interfaces';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  @Input() loading;
  @Input() doneLoading;

  heroes:any[] = [];
  filteredHeroes:any[] = [];
  hideHeroData:boolean[] = [];
  catalystsLocations:ILocations[] = []

  constructor(private catalystsService: CatalystsService) {
  }
  
  ngOnInit() {
    this.loading();
    this.catalystsService.getCatalystLocations().subscribe(catalysts => {
      for(let catalyst in catalysts) {
        this.catalystsLocations.push({
          catalystID: catalyst,
          locations: catalysts[catalyst].locations
        });
      }
    })

    this.catalystsService.getHeroes().subscribe(heroesData => {
      Object.keys(heroesData).map(hero => {
        this.hideHeroData.push(true);
        let catalysts = [];

        Object.keys(heroesData[hero]).map(catalyst => {
          const catalystData:ICatalyst = {
            id: catalyst,
            locations: [],
            awakening: heroesData[hero][catalyst]['Awakening'],
            skills: heroesData[hero][catalyst]['Skills']
          }

          const matchingCatalyst = this.catalystsLocations.find(catalystLocation => catalystLocation.catalystID === catalyst);
          if(matchingCatalyst) {
            const locationData = matchingCatalyst.locations.map(location => {
              return {
                ...location,
                isWorldStage: /World/.test(location.stage) ? true : false
              }
            });
            catalystData.locations = locationData;
          }
          catalysts.push(catalystData);
        });

        this.heroes.push({
          name: hero, 
          catalysts: catalysts
        });
      });
      console.log(this.heroes)
      this.filteredHeroes = [...this.heroes];
      console.log(this.filteredHeroes);
      this.doneLoading();
    });
  }

  filter(input) {
    this.filteredHeroes = this.heroes.filter(hero => {
      return hero.name.toLowerCase().indexOf(input.toLowerCase()) >= 0 ? hero : '';
    }).sort();
  }
}