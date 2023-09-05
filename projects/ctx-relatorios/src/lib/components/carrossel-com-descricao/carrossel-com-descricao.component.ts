import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-carrossel-com-descricao',
    templateUrl: './carrossel-com-descricao.component.html'
})
export class CarrosselComDescricaoComponent implements OnInit {
    @Input() infoDevs: any;

    constructor() {}
    ngOnInit(): void {
        console.log(this.infoDevs);
    }

}
