import {Component} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-detalhado',
    templateUrl: './relatorio-detalhado.component.html'
})
export class RelatorioDetalhadoComponent {

    constructor() { }

    products = [
        {code: 10, name: 'Dez'},
        {code: 11, name: 'Eleven'}
    ]

}
