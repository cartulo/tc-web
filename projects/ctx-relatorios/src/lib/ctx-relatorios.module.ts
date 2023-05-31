import {NgModule} from '@angular/core';

import {RelatorioDetalhadoComponent} from './pages/relatorio-detalhado/relatorio-detalhado.component';

const components = [
  RelatorioDetalhadoComponent
]

@NgModule({
  imports: [],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class CtxRelatoriosModule { }
