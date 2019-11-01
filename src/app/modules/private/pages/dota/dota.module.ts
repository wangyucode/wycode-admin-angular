import { NgModule } from '@angular/core';
import { DotaComponent } from './dota.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from '../../ui/ui.module';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  {
    path: '', component: DotaComponent,
    children: [{ path: '', redirectTo: 'version' }, { path: 'version', component: VersionComponent }]
  }
];

@NgModule({
  declarations: [DotaComponent, VersionComponent],
  imports: [
    RouterModule.forChild(routes), SharedModule, UiModule
  ],
  exports: []
})
export class DotaModule {
}
