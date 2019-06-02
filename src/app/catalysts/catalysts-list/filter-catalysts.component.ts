import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-catalysts',
    template: `
        <input 
            id="catalysts-search" 
            type="text" 
            placeholder="Enter Catalyst"
            [(ngModel)]="filter"
        />
    `
})

export class FilterCatalystsComponent implements OnInit {
    private _filter: string;

    @Input()
    get filter() {
        return this._filter;
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter);
    }

    constructor() {}

    ngOnInit() {

    }
}