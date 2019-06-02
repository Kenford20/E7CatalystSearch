import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CatalystsService } from './catalysts.service';

@NgModule({ 
    imports: [HttpClientModule],
    providers: [CatalystsService]
})

export class CoreModule {}