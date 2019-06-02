import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artifacts-list',
  templateUrl: './artifacts-list.component.html',
  styleUrls: ['./artifacts-list.component.scss']
})
export class ArtifactsListComponent implements OnInit {
  @Input() artifacts:string[];

  constructor() { }

  ngOnInit() {
  }

}
