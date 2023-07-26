import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CtxRelatoriosComponent} from 'projects/ctx-relatorios/src/lib/ctx-relatorios.component';
import {RelatorioDetalhadoComponent} from 'projects/ctx-relatorios/src/lib/pages/relatorio-detalhado.component';
import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
    {path: '', redirectTo: 'relatorios/detalhado', pathMatch: 'full'},
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'relatorio',
                component: CtxRelatoriosComponent,
                children: [
                    {path: 'detalhado', component: RelatorioDetalhadoComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}