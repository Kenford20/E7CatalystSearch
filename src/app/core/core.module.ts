import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ArtifactsService } from './artifacts.service';

@NgModule({ 
    imports: [HttpClientModule],
    providers: [ArtifactsService]
})

export class CoreModule {}