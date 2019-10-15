import { NgModule } from '@angular/core';
import { DotaComponent } from './dota.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from '../../ui/ui.module';

const routes: Routes = [
  { path: "", component: DotaComponent }
]

@NgModule({
  declarations: [DotaComponent],
  imports: [
    RouterModule.forChild(routes), SharedModule, UiModule
  ],
  exports: []
})
export class DotaModule { }
