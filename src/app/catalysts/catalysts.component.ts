import { CatalystsService } from '../core/catalysts.service';
import { Component, OnInit } from '@angular/core';
import { IHeroes, ICatalysts, ILocations, ILocation } from '../shared/interfaces';

@Component({
  selector: 'app-catalysts',
  templateUrl: './catalysts.component.html',
  styleUrls: ['./catalysts.component.scss']
})

export class CatalystsComponent implements OnInit {
  heroes:any[] = [];
  filteredHeroes:any[] = [];
  hideHeroData:boolean[] = [];

  catalysts:string[] = [];
  catalystsLocations:ILocations[] = []
  filteredCatalysts:any[] = [];
  catalystIDs:string[] = [];

  constructor(private catalystsService: CatalystsService) {
    
  }

  ngOnInit() {
    this.catalystsService.getCatalysts().subscribe(catalysts => {
      for(let catalyst in catalysts) {
        const catalystLocation = {
          catalystID: catalyst,
          locations: catalysts[catalyst].locations
        }
        this.catalystsLocations.push(catalystLocation);
      }
    })

    this.catalystsService.getHeroes().subscribe(heroesData => {
      for(let hero in heroesData) {
        let heroData:IHeroes = {
          name: hero,
          catalysts: []
        }
        this.hideHeroData.push(true);

        for(let catalyst in heroesData[hero]) {
          let catalystData:ICatalysts = {
            id: catalyst,
            locations: [],
            purposes: {}
          }
          const matchingCatalyst = this.catalystsLocations.find(catalystLocation => catalystLocation.catalystID === catalyst);

          if(matchingCatalyst) {
            let locationData = [...matchingCatalyst.locations];

            locationData = locationData.map(location => {
              if(/World/.test(location.stage)) {
                return {
                  ...location,
                  isWorldStage: true
                }
              } else {
                return {
                  ...location,
                  isWorldStage: false
                }
              }
            })

            catalystData.locations = locationData;
          }

          for(let purpose in heroesData[hero][catalyst]) {
            catalystData.purposes[purpose] = heroesData[hero][catalyst][purpose];
          }
          heroData.catalysts.push(catalystData);
        }
        this.heroes.push(heroData);
      }
      this.filteredHeroes = this.heroes.sort();
      //console.log(this.catalystsLocations);
      console.log(this.heroes)
    });
  }

  filter(input) {
    this.filteredHeroes = this.heroes.filter(hero => {
      return hero.name.toLowerCase().indexOf(input.toLowerCase()) >= 0 ? hero : '';
    }).sort();
  }
}



        // for(let catalyst in heroes[hero]) {
        //   if(!this.catalystIDs.includes(catalyst)) {
        //     this.catalystIDs.push(catalyst)
        //     this.catalysts.push(catalyst.replace(/-/g, ' '));
        //   }
        // }