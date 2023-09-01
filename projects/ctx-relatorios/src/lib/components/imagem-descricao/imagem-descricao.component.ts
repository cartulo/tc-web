import {Component, Input} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-imagem-descricao',
    templateUrl: 'imagem-descricao.component.html'
})
export class ImagemDescricaoComponent {
    @Input() posicaoImagem: string;
}
