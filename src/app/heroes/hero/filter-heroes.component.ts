import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-heroes',
    template: `
        <input 
            id="heroes-search" 
            type="text" 
            placeholder="Enter Hero Name"
            [(ngModel)]="filter"
        />
    `,
    styles: [`
        input {
            padding: 5px 10px;
            margin: 15px 0;
            width: 240px;
        }
    `]
})

export class FilterHeroesComponent implements OnInit {
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