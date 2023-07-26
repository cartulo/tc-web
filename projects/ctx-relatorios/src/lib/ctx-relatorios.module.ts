import {NgModule} from '@angular/core';

import {ComponentsModule} from 'projects/tools/src/lib/modules/components/components.module';

import {CtxRelatoriosComponent} from './ctx-relatorios.component';
import {RelatorioDetalhadoComponent} from './pages/relatorio-detalhado.component';

@NgModule({
  imports: [
    ComponentsModule
  ],
  declarations: [
    CtxRelatoriosComponent,
    RelatorioDetalhadoComponent
  ],
  exports: []
})
export class CtxRelatoriosModule { }
