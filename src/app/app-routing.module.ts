import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/public/login/login.component';
import { ErrorComponent } from './modules/public/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: "/page/dashboard", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "page", loadChildren: './modules/private/private.module#PrivateModule' },
  { path: "**", component: ErrorComponent, data: { code: 404 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
