import { HtsIaService } from './htsia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HtsIaComponent } from './htsia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HtsIaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HtsIaService
  ],
  bootstrap: [
    HtsIaComponent
  ]
})
export class HtsIaModule { }
