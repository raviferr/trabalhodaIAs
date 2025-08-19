const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Logo após concluir o curso de engenharia mecânica, você se depara com uma inteligência artificial altamente avançada, capaz de analisar sistemas, antecipar defeitos e criar simulações realistas em som e imagem. Qual é sua reação diante dessa transformação tecnológica na engenharia?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "A princípio, sentiu-se desconfortável com o avanço tão rápido dessa tecnologia."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Uma tecnologia assim abre portas incríveis para inovar na engenharia!"
            }
        ]
    },
    {
        enunciado: "Após apresentar a Inteligência Artificial aos alunos, uma professora da área de tecnologia decide desenvolver uma série de aulas sobre o assunto. Ao término de uma dessas aulas, ela solicita que você elabore um trabalho sobre como a IA pode ser utilizada em sala de aula. Qual é sua reação?" ,
        alternativas: [
            {
                texto: "Recorreu a uma ferramenta inteligente da internet que usa IA para localizar conteúdos importantes e apresentar explicações de forma clara e acessível.",
                afirmacao: "Soube aproveitar a IA como aliada na pesquisa para o trabalho escolar."
            },
            {
                texto: "Produziu o trabalho a partir de conversas com outros alunos, buscas online e seus próprios conhecimentos sobre o assunto.",
                afirmacao: "Preferiu reunir ideias com base em suas experiências, pesquisas e diálogos com colegas."
            }
        ]
    },
    {
        enunciado: "Após a apresentação do projeto sobre IA, o professor promoveu um debate para discutir como foi o processo de pesquisa e elaboração. Durante a conversa, surgiu um tema essencial: de que forma a inteligência artificial transformará o trabalho na engenharia mecânica no futuro. Qual é a sua posição nesse debate?",
        alternativas: [
            {
                texto: "Defende que a inteligência artificial impulsionará inovações na engenharia mecânica, criando novas funções e potencializando as habilidades humanas.",
                afirmacao: "Acredita que a IA vai expandir as possibilidades profissionais e aprimorar as competências dos engenheiros mecânicos."
            },
            {
                texto: "Demonstra apreensão quanto à substituição de profissionais por tecnologias e apoia a formação de grupos para debater práticas responsáveis da inteligência artificial.",
                afirmacao: "Preocupa-se com o impacto da automação no mercado de trabalho e promove discussões sobre o uso ético da IA na engenharia."
            }
        ]
    },
    {
        enunciado: "Após o debate, foi solicitado que você criasse uma imagem digital que simbolizasse sua visão sobre o impacto da IA na engenharia mecânica. Como você procede?",
        alternativas: [
            {
                texto: "Usou um programa simples de edição, como o Paint, para elaborar a imagem.",
                afirmacao: "Percebeu que muitos ainda têm dificuldade com softwares básicos e resolveu ajudar colegas a aprenderem ferramentas digitais simples de design."
            },
            {
                texto: "Produziu a imagem com a ajuda de um gerador de imagens baseado em inteligência artificial.",
                afirmacao: "Otimizou a criação dos seus projetos usando geradores de imagem por IA e agora orienta quem tem dificuldade em desenho tradicional a usar essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Você faz parte de um grupo na engenharia mecânica com um projeto para entregar na próxima semana. O trabalho está atrasado, e um membro do grupo utilizou uma IA para ajudar. No entanto, o material apresentado é exatamente igual ao gerado pela ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Considera que pedir ajuda à IA com comandos é válido, mas copiar o texto inteiro sem contribuir pessoalmente pode prejudicar o desenvolvimento do grupo.",
                afirmacao: "Reconhece que usar a IA para gerar conteúdo pode ajudar, mas entende que confiar totalmente nela pode comprometer o aprendizado e a colaboração."
            },
            {
                texto: "Embora a IA seja uma tecnologia avançada, é fundamental revisar o material gerado e acrescentar contribuições próprias para garantir a autenticidade e qualidade do trabalho.",
                afirmacao: "Entendeu que a IA segue padrões definidos por seus programadores e que nem sempre o conteúdo gerado representa suas ideias, por isso usa a ferramenta apenas como apoio, nunca como produto acabado."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();