import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
    {path: '', redirectTo: 'relatorios/detalhado', pathMatch: 'full'},
    {
        path: 'relatorios',
        component: AppLayoutComponent,
        children: [
            {path: 'detalhado', loadChildren: () => import('../../../ctx-relatorios/src/lib/ctx-relatorios.module').then(m => m.CtxRelatoriosModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}