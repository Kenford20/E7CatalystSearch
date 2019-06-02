import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'filter-artifacts',
    template: `
        <div>
            <input 
                id="artifacts-search" 
                type="text" 
                placeholder="Enter artifact"
            />
            <button (click)="foo()">Click me m8</button>
        </div>
    `
})

export class FilterArtifactsComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }
}