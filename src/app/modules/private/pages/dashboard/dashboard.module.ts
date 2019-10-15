import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from '../../ui/ui.module';
import { ErrorStatistComponent } from './error-statist/error-statist.component';
import { AccessRecordComponent } from './access-record/access-record.component';
import { AppUseComponent } from './app-use/app-use.component';
import { HotBlogComponent } from './hot-blog/hot-blog.component';
import { AccessGeoComponent } from './access-geo/access-geo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent, ErrorStatistComponent, AccessRecordComponent, AppUseComponent, HotBlogComponent, AccessGeoComponent],
  imports: [RouterModule.forChild(routes), SharedModule, UiModule],
  exports: []
})
export class DashboardModule {
}
