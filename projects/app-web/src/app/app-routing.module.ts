import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RelatorioDetalhadoComponent} from './modules/relatorios/pages';

const routes: Routes = [
    {path: '', component: RelatorioDetalhadoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}