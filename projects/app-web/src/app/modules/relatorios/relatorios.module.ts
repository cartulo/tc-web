import {NgModule} from '@angular/core';

import {RelatoriosComponent} from './relatorios.component';
import {RelatorioDetalhadoComponent} from './pages';

import {ComponentsModule} from 'projects/tools/src/lib/modules/components/components.module';

const components = [
    RelatoriosComponent,
    RelatorioDetalhadoComponent
]

@NgModule({
    imports: [
        ComponentsModule
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ]
})
export class RelatoriosModule { }
