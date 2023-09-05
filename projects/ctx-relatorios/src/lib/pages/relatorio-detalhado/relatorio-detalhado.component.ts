import {Component} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-detalhado',
    templateUrl: './relatorio-detalhado.component.html'
})
export class RelatorioDetalhadoComponent {
    constructor() { }

    cardsInformativos = [
        {
            posicao: 'start',
            texto: 'Explore como a tecnologia está transformando a agricultura. Neste TCC, descubra como uma estação de irrigação automática pode revolucionar a maneira como cultivamos nossos alimentos, economizando água e aumentando a produtividade. A irrigação nunca foi tão eficiente e amiga do meio ambiente.',
            imagem: 'card1.jpg',
            imagemTextoAlternativo: 'Agricultura Sustentável: Automatizando a Irrigação'
        },
        {
            posicao: 'end',
            texto: 'Aprofunde-se na tecnologia por trás da estação de irrigação automática. Saiba como projetamos e montamos um sistema de irrigação que utiliza sensores de umidade do solo e dados climáticos para fornecer água de maneira precisa. Descubra como coletamos dados de campo e analisamos os resultados para otimizar o desempenho do sistema.',
            imagem: 'card2.png',
            imagemTextoAlternativo: 'Projeto Inteligente: A Estação de Irrigação Automática'
        },
        {
            posicao: 'start',
            texto: 'Os resultados estão à vista! Explore como nossa estação de irrigação automática economiza água e impulsiona a produtividade agrícola. Comparamos seu desempenho com sistemas tradicionais e destacamos os benefícios ambientais. Concluímos com recomendações para implementar essa tecnologia em diferentes contextos agrícolas.',
            imagem: 'card3.webp',
            imagemTextoAlternativo: 'Colhendo os Frutos da Agricultura Sustentável',
        }
    ]

    informacoesDesenvolvedores = [
        {
            texto: 'Gilberto é um profissional altamente qualificado na área de Tecnologia da Informação (TI) e programação. Sua jornada é marcada por uma paixão fervorosa pela inovação tecnológica e pela sustentabilidade. Ele desempenhou um papel fundamental no desenvolvimento do projeto da estação de irrigação automática que você encontra neste site.',
            imagem: 'gilberto.jpg',
            imagemTextoAlternativo: 'Gilberto Junior'
        },
        {
            texto: '',
            imagem: '',
            imagemTextoAlternativo: 'Caroline Carvalho'
        }
    ]
}
