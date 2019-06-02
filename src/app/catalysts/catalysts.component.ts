import { CatalystsService } from '../core/catalysts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalysts',
  templateUrl: './catalysts.component.html',
  styleUrls: ['./catalysts.component.scss']
})

export class CatalystsComponent implements OnInit {
  heroesData: any[] = [];
  heroNames:string[] = [];
  catalysts:string[] = [];
  filteredCatalysts: any[] = [];
  catalystIDs:string[] = [];

  constructor(private catalystsService: CatalystsService) {
    
  }

  ngOnInit() {
    this.catalystsService.getHeroes().subscribe(heroes => {
      this.heroesData = heroes;

      for(let hero in heroes) {
        this.heroNames.push(hero)

        for(let catalyst in heroes[hero]) {
          if(!this.catalystIDs.includes(catalyst)) {
            this.catalystIDs.push(catalyst)
            this.catalysts.push(catalyst.replace(/-/g, ' '));
          }
        }
      }
      this.filteredCatalysts = this.catalysts.sort();
      console.log(this.heroesData);
    });
  }

  filter(input) {
    this.filteredCatalysts = this.catalysts.filter(catalyst => catalyst.indexOf(input) >= 0 ? catalyst : '').sort();
  }
}
