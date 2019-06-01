import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'filter-artifacts',
    template: `
        <input 
            id="artifacts-search" 
            type="text" 
            placeholder="Enter artifact"
        />
    `
})

export class FilterArtifactsComponent implements OnInit {
    constructor() {}

    ngOnInit() {

    }
}