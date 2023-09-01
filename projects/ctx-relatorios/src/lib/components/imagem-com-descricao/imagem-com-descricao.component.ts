import {Component, Input} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-imagem-com-descricao',
    templateUrl: 'imagem-com-descricao.component.html'
})
export class ImagemComDescricaoComponent {
    @Input() posicaoImagem: string;
}
