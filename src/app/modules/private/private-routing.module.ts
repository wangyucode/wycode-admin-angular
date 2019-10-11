import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';


const routes: Routes = [
    {
        path: '', component: PrivateComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'dota', loadChildren: './pages/dota/dota.module#DotaModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
