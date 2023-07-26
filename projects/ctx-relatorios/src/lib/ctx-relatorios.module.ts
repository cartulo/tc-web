import {NgModule} from '@angular/core';

import {ComponentsModule} from 'projects/tools/src/lib/modules/components/components.module';
import {CtxRelatoriosRoutingModule} from './ctx-relatorios-routing.module';

import {CtxRelatoriosComponent} from './ctx-relatorios.component';
import {RelatorioDetalhadoComponent} from './pages';

@NgModule({
  imports: [
    ComponentsModule,
    CtxRelatoriosRoutingModule
  ],
  declarations: [
    CtxRelatoriosComponent,
    RelatorioDetalhadoComponent
  ],
  exports: []
})
export class CtxRelatoriosModule { }
