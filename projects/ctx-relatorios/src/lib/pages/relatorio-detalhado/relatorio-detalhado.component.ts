import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ctx-relatorios-detalhado',
    templateUrl: './relatorio-detalhado.component.html'
})
export class RelatorioDetalhadoComponent implements OnInit {
    urlFull: string = 'https://aps-carol.x10.mx/aps/public/api';
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
            imagem: 'card2.jpg',
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
    dadosSolo: any;
    dadosBomba: any;
    quantidadeAcionamentosMes: number;
    mesLeituraAcionamentos: string;
    ultimoRegistroSolo: Solo;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.basicOptions = this.definirConfiguracoesGrafico();

        this.carregarDadosSolo();
        this.carregarUltimoRegistroBomba();
    }

    private carregarDadosSolo() {
        this.http.get(`${this.urlFull}/solo`).subscribe((res: any) => {
            let dadosFormatados = this.formatarDadosSolo(res);

            this.dadosSolo = {
                labels: dadosFormatados.map(data => data.dataIrrigacao),
                datasets: [
                    {
                        label: 'Umidade',
                        data: dadosFormatados.map(data => data.umidade),
                        backgroundColor: ['rgba(39, 181, 245, 0.8)'],
                        borderColor: ['rgba(39, 181, 245, 0.8)'],
                        borderWidth: 1
                    }
                ]
            }
        });
    }

    private formatarDadosSolo(dados): Solo[] {
        let resultado = [];

        dados.forEach(dado => {
            let entidade = new Solo();
            let dataFormatada = this.formatarDatas(dado.registro);

            if (dado.umidade < 5) return;

            entidade.id = dado.id_solo
            entidade.estado = dado.estado.toUpperCase()
            entidade.dataIrrigacao = `${dataFormatada[0]} às ${dataFormatada[1]}`
            entidade.mesLeitura = dataFormatada[2].getMonth()
            entidade.umidade = Number(dado.umidade);

            resultado.push(entidade);
        });

        let ultimoIndice = resultado.length - 1;
        this.ultimoRegistroSolo = resultado[ultimoIndice];

        this.obterDadosAcionamentoBomba(resultado);

        resultado = resultado.slice(ultimoIndice - 14);

        return resultado;
    }

    private obterDadosAcionamentoBomba(dados) {
        const hoje = new Date();
        const mesAtual = hoje.getMonth();

        var meses = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ];

        this.quantidadeAcionamentosMes = dados.filter(dado => dado.mesLeitura == mesAtual).length;
        this.mesLeituraAcionamentos = meses[mesAtual];
    }

    private carregarUltimoRegistroBomba() {
        let resultado = new Bomba();

        this.http.get(`${this.urlFull}/bomba/last`).subscribe((res: any) => {
            let dataFormatada = this.formatarDatas(res.registro);

            resultado.irrigacaoId = res.id_irrigacao
            resultado.tipoAcao = res.tipo_acao == 1 ? 'LIGADO' : 'DESLIGADO'
            resultado.dataRegistro = `${dataFormatada[0]} às ${dataFormatada[1]}`
        })

        this.dadosBomba = resultado;
    }

    private formatarDatas(value): any[] {
        const [data, hora] = value.split(' ');
        const dataJs = new Date(data);

        const [ano, mes, dia] = data.split('-');
        const [horas, minutos] = hora.split(':');

        return [`${dia}/${mes}/${ano}`, `${horas}:${minutos}`, dataJs];
    }

    private definirConfiguracoesGrafico() {
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
    id: string;
    estado: string;
    dataIrrigacao: string;
    mesLeitura: number;
    umidade: number;
}

export class Bomba {
    irrigacaoId: string;
    tipoAcao: string;
    dataRegistro: string;
}