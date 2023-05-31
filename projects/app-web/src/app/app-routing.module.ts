import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RelatorioDetalhadoComponent} from 'projects/ctx-relatorios/src/lib/pages/relatorio-detalhado/relatorio-detalhado.component';

import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
    {
        path: 'demo', component: AppLayoutComponent,
        children: [
            {path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule)},
            {path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule)},
            {path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule)},
            {path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)},
            {path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule)},

            {path: 'teste', component: RelatorioDetalhadoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}