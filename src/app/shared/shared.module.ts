import { SumArrayNumbers } from './sum-array-numbers-pipe';
import { NgModule } from '@angular/core';
import { SpaceSeparatePipe } from './space-separated-words-pipe';

@NgModule({
    declarations: [SpaceSeparatePipe, SumArrayNumbers],
    exports: [SpaceSeparatePipe, SumArrayNumbers]
})   
export class SharedModule {}