import {Component} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-carrossel-com-descricao',
    templateUrl: './carrossel-com-descricao.component.html'
})
export class CarrosselComDescricaoComponent {

    constructor() { }

    products = [
        {code: 10, name: 'Dez'},
        {code: 11, name: 'Eleven'},
        {code: 12, name: 'Two Elves'},
        {code: 13, name: 'Yoshi'}
    ]

}
