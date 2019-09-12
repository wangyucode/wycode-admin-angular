import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoaderComponent],
  imports: [MaterialModule, FlexLayoutModule, CommonModule, HttpClientModule],
  exports: [MaterialModule, FlexLayoutModule, LoaderComponent, CommonModule, HttpClientModule]
})
export class SharedModule {
}
