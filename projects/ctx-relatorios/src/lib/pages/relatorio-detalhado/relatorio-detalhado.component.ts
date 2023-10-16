import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-detalhado',
    templateUrl: './relatorio-detalhado.component.html'
})
export class RelatorioDetalhadoComponent implements OnInit {
    urlFull: string = 'http://aps-carol.x10.mx/aps/public/api';
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
            texto: 'Carol é uma pessoa que adora jogar videogame e tem um grande interesse em tecnologia. Sua curiosidade é evidente, pois está sempre em busca de novos conhecimentos e desafios. Sua natureza criativa se destaca, principalmente, pelo gosto em criar soluções inovadoras e expressar a criatividade de diversas maneiras.',
            imagem: 'caroline.jpg',
            imagemTextoAlternativo: 'Caroline Carvalho'
        }
    ]

    basicData: any;
    basicOptions: any;
    dados: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.basicOptions = this.definirOpcoesBasicas();

        this.http.get(`${this.urlFull}/solo`).subscribe((res: any) => {
            let datasFormatadas = this.formatarDados(res.data);

            this.dados = {
                labels: datasFormatadas.map(data => data.dataIrrigacao),
                datasets: [
                    {
                        label: datasFormatadas.map(data => data.horaIrrigacao),
                        data: datasFormatadas.map(data => data.umidade),
                        backgroundColor: ['rgba(39, 181, 245, 0.8)'],
                        borderColor: ['rgba(39, 181, 245, 0.8)'],
                        borderWidth: 1
                    }
                ]
            }
        });
    }

    formatarDados(dados): Solo[] {
        let resultado = [];

        dados.forEach(dado => {
            let dataFormatada = new Solo();

            const [data, hora] = dado.registro.split(' ');

            const [ano, mes, dia] = data.split('-');
            const [horas, minutos] = hora.split(':');

            dataFormatada.dataIrrigacao = dia + '/' + mes + '/' + ano;
            dataFormatada.horaIrrigacao = horas + ':' + minutos;
            dataFormatada.umidade = Number(dado.umidade);

            resultado.push(dataFormatada);
        });

        return resultado;
    }

    definirOpcoesBasicas() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        let resultado = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        return resultado;
    }
}

export class Solo {
    dataIrrigacao: string;
    horaIrrigacao: string;
    umidade: number;
}