// MENU RESPONSIVO

function navShow(){
    let menuMobile = document.querySelector('.mobile-nav');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./images/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./images/close_white_36dp.svg";
    }
}

// FIM MENU RESPONSIVO

/*name: "",
link: "",
subtitle: "",
difficulty: ,
function: "",
functionImage: "",
lane: "",
laneImage: "",
description: "",
abilities: [""],
freeChampionRotation: ,
linkImage: "",
altImage: ""
*/


const champions = [
{
    name: "Akshan",
    link: "akshan",
    subtitle: "O sentinela rebelde",
    difficulty: 1,
    function: "Atirador",
    lane: "Meio",
    description: "Akshan ri da cara do perigo, lutando contra o mal com carisma, determinação e desejo de vingança, mas, estranhamente, sem vestir uma camisa sequer.",
    abilities: ["Lutando Sujo", "Bumerangue Vingativo", "Rebeldia", "Impulso Heroico", "Punição"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Akshan_ChampionList.jpg",
    altImage: "Campeão Akshan capturado durante um pulo, apontando sua espada."
},
{
    name: "Amumu",
    link: "amumu",
    subtitle: "A múmia triste",
    difficulty: 1,
    function: "Tanque",
    lane: "Selva",
    description: "Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo.",
    abilities: ["Toque Amaldiçoado", "Lançar Bandagens", "Desespero", "Chilique", "A Maldição da Múmia Triste"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Amumu_ChampionList.jpg",
    altImage: "Campeão Amumu sentado em uma pilastra de madeira chorando enquanto olha um holográfico de um boneco, representando sua busca por um amigo."
},
{
    name: "Annie",
    link: "annie",
    subtitle: "A criança sombria",
    difficulty: 2,
    function: "Mago",
    lane: "Meio",
    description: "Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco.",
    abilities: ["Piromania", "Desintegrar", "Incinerar", "Escudo Fundido", "Invocar: Tibbers"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Annie_ChampionList.jpg",
    altImage: "Campeã Annie, com feições desafiadoras, segurando um ursinho de pelúcia e com fogo crepitando na mão direita."
},
{
    name: "Ashe",
    link: "ashe",
    subtitle: "A arqueira do gelo",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte e espera unificar Freljord mais uma vez.",
    abilities: ["Tiro Congelado", "Concetração", "Rajada", "Olhar do Falcão", "Flecha de Cristal Encantada"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Ashe_ChampionList.jpg",
    altImage: "Campeã Ashe mirando com seu arco de Gelo Verdadeiro."
},
{
    name: "Brand",
    link: "brand",
    subtitle: "A vingança flamejante",
    difficulty: 2,
    function: "Mago",
    lane: "Inferior",
    description: "Com sua alma consumida pelo fogo e seu corpo um invólucro de uma chama viva, Brand agora vaga por Valoran em busca de runas, jurando vingança.",
    abilities: ["Labareda", "Cauterizar", "Pilar de Chamas", "Conflagração", "Piroclasma"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Brand_ChampionList.jpg",
    altImage: "Campeão Brand soltando rajadas de fogo por ambas mãos e pela cabeça."
},
{
    name: "Caitlyn",
    link: "caitlyn",
    subtitle: "A xerife de Piltover",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "É a melhor pacificadora e a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos.",
    abilities: ["Bem na Mira", "Pacificadora de Piltover", "Armadilha Mecânica Yordle", "Rede Calibre 90", "Às na Manga"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Caitlyn_ChampionList.jpg",
    altImage: "Campeã Caitlyn na torre de vigia, segurando seu chapéu e equilibrando sua arma no joelho direito."
},
{
    name: "Dr. Mundo",
    link: "dr-mundo",
    subtitle: "O louco de Zaun",
    difficulty: 2,
    function: "Lutador",
    lane: "Superior",
    description: "Completamente maluco, tragicamente perigoso e terrivelmente roxo, Dr. Mundo é o que mantém muitos zaunitas dentro de casa nas noites mais escuras.",
    abilities: ["Vai para Onde Quer", "Serra Infectada", "Choquinho Cardíaco", "Traumatismo", "Dosagem Máxima"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/DrMundo_ChampionList.jpg",
    altImage: "Campeão Dr. Mundo dentro da sua clínica, olhando para um paciente acamado, com uma expressão louca e com a lingua de fora. Com o braço direito segura uma prancheta com vários papéis."
},
{
    name: "Ezreal",
    link: "ezreal",
    subtitle: "O explorador pródigo",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Um aventureiro com um talento nato nas artes mágicas, supera com facilidade as situações mais improváveis.",
    abilities: ["Feitiço do Poder Crescente", "Disparo Místico", "Fluxo Essencial", "Translocação Arcana", "Barragem Incendiária"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Ezreal_ChampionList.jpg",
    altImage: "Campeão Ezreal com um sorriso maroto soltando um disparo mítico com sua mística luva shurimane, que ele usa para causar explosões arcanas devastadoras."
},
{
    name: "Fiora",
    link: "fiora",
    subtitle: "O explorador pródigo",
    difficulty: 1,
    function: "Lutador",
    lane: "Superior",
    description: "A duelista mais temida de toda Valoran, é renomada tanto por suas maneiras bruscas e perspicácia quanto pela velocidade de sua rapieira de aço.",
    abilities: ["Dança da Duelista", "Estocada", "Ripostar", "Esgrima", "Desafio Gradioso"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Fiora_ChampionList.jpg",
    altImage: "Campeã Fiora apontando sua espada enquanto pétalas de rosas caem ao seu redor."
},
{
    name: "Gnar",
    link: "gnar",
    subtitle: "O Yordle pré-histórico",
    difficulty: 3,
    function: "Lutador",
    lane: "Superior",
    description: "Um yordle primitivo cujas artimanhas brincalhonas podem irromper numa raiva infantil, transformando-o numa besta gigantesca determinada a destruir.",
    abilities: ["Fúria Genética", "Bumerangue/Pedregulho", "Hiperativo / Safanão", "Pirueta / Encontrão", "Gnar!"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Gnar_ChampionList.jpg",
    altImage: "Campeão Gnar em um canto em uma caverna, com a parede arranhada atrás dele, uma pegada gigante no chão e com um sorriso brincalhão."
},
{
    name: "Irelia",
    link: "irelia",
    subtitle: "A dançarina das lâminas",
    difficulty: 2,
    function: "Lutador",
    lane: "Meio",
    description: "Treinada nas antigas danças de Ionia, adaptou sua arte à guerra, usando movimentos graciosos e bem executados para levitar uma série de lâminas fatais.",
    abilities: ["Fervor Ioniano", "Surto da Lâmina", "Dança Desafiadora", "Dueto Impecável", "Lâmina da Vanguarda"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Irelia_ChampionList.jpg",
    altImage: "Campeã Irelia executando cuidadosamente um movimento para levitar uma série de lâminas ao seu redor, agachada em uma pedra grande."
},
{
    name: "Janna",
    link: "janna",
    subtitle: "A fúria da Tormenta",
    difficulty: 2,
    function: "Suporte",
    lane: "Inferior",
    description: "Armada com o poder das ventanias de Runeterra, Janna é um misterioso e elemental espírito de vento que protege os desfavorecidos de Zaun.",
    abilities: ["Brisa de Impulso", "Ventania Uivante", "Zéfiro", "Olho da Tempestade", "Monção"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Janna_ChampionList.jpg",
    altImage: "Campeã Janna no meio de um tornado gerado por ela, segurando seu cetro, com cabelos e roupas voando na direção do vento."
},
{
    name: "Jinx",
    link: "jinx",
    subtitle: "O gatilho desenfreado",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.",
    abilities: ["Anime-se!", "Trocando!", "Zap!", "Mordidinha Flamejante", "Super Mega Míssil da Morte"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Jinx_ChampionList.jpg",
    altImage: "Campeã Jinx sorrindo segurando Fishbones, seu lança-mísseis."
},
{
    name: "Kalista",
    link: "kalista",
    subtitle: "A lança da Vingaça",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Um espectro de ira e retaliação, Kalista é o espírito imortal da vingança, um pesadelo blindado invocado da Ilhas das Sombras para caçar desertores e traidores.",
    abilities: ["Aprumo Marcial", "Perfurar", "Vigia", "Lacerar", "Chamado do Destino"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Kalista_ChampionList.jpg",
    altImage: "Campeã Kalista rodeada por sombras e fumaça negra segurando sua lança."
},
{
    name: "Karthus",
    link: "karthus",
    subtitle: "A voz mortal",
    difficulty: 2,
    function: "Mago",
    lane: "Selva",
    description: "Sendo o presságio do fim, Karthus é um espírito imortal cujas canções assombradoras são um prelúdio para o terror de sua aparição horripilante.",
    abilities: ["Desafio da Morte", "Devastar", "Barreira da Dor", "Perverter", "Réquiem"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Karthus_ChampionList.jpg",
    altImage: "Campeão Karthus no meio de redemoinho de espíritos, com a boca aberta, com a mão fechando em punho e segurando seu cetro."
},
{
    name: "Katarina",
    link: "katarina",
    subtitle: "A lâmina sinistra",
    difficulty: 3,
    function: "Assassino",
    lane: "Meio",
    description: "Katarina é a assassina de maior calibre de Noxus. Não importa a missão, não hesita ao executar seu dever no meio de um furacão de adagas serrilhadas.",
    abilities: ["Voracidade", "Lâmina Saltitante", "Preparação", "Shunpo", "Lótus da Morte"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Katarina_ChampionList.jpg",
    altImage: "Campeã Katarina correndo em alta velocidade com suas duas espadas e com olhar obstinado."
},
{
    name: "Leblanc",
    link: "leblanc",
    subtitle: "A farsante",
    difficulty: 3,
    function: "Assassino",
    lane: "Meio",
    description: "Sempre planejando às escondidas, as verdadeiras motivações de LeBlanc são tão inescrutáveis quanto sua identidade inconstante.",
    abilities: ["Imagem-Espelho", "Sigilo de Malícia", "Distorção", "Correntes Etéreas", "Mímica"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Leblanc_ChampionList.jpg",
    altImage: "Campeã Leblanc usando sua magia para espelhar a si mesma com seu cetro, atrás de si correndo para o lado oposto."
},
{
    name: "Lucian",
    link: "lucian",
    subtitle: "O purificador",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Lucian, um Sentinela da Luz, é um caçador de espíritos imortais que usa suas pistolas relicárias para persegui-los implacavelmente e, por fim, aniquilá-los.",
    abilities: ["Disparo Iluminado", "Luz Perfurante", "Chama Ardente", "Perseguição Implacável", "O Expurgo"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Lucian_ChampionList.jpg",
    altImage: "Campeão Lucian apontando para os dois lados com suas pistolas relicárias, rodeado por espíritos tentando atacá-lo."
},
{
    name: "Lulu",
    link: "lulu",
    subtitle: "A fada feiticeira",
    difficulty: 2,
    function: "Suporte",
    lane: "Inferior",
    description: "A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix.",
    abilities: ["Pix, o Silfo Companheiro", "Lança-Purpurina", "Caprichos", "Socorro, Pix", "Crescimento Virente"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Lulu_ChampionList.jpg",
    altImage: "Campeã Lulu pulando com uma expressão brincalhona, sorrindo, acompanhada do seu companheiro Silfo, Pix, em uma floresta mágica."
},
{
    name: "Lux",
    link: "lux",
    subtitle: "A dama da Luz",
    difficulty: 2,
    function: "Mago",
    lane: "Inferior",
    description: "Capaz de dobrar a luz à sua vontade, Lux cresceu temendo ser descoberta e exilada, mas agora ela os utiliza em segredo a serviço de sua terra natal.",
    abilities: ["Iluminação", "Ligação da Luz", "Barreira Prismática", "Singularidade Lucente", "Centelha Final"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Lux_ChampionList.jpg",
    altImage: "Campeã Lux dobrando luz ao seu redor enquanto sorri com os cabelos voando ao seu redor."
},
{
    name: "Miss Fortune",
    link: "miss-fortune",
    subtitle: "A caçadora de recompensas",
    difficulty: 1,
    function: "Atirador",
    lane: "Inferior",
    description: "Uma capitã de Águas de Sentina famosa por sua aparência e impiedade,aqueles que a subestimarem enfrentarão uma oponente sedutora e imprevisível.",
    abilities: ["Batida do Amor", "Dois por Um", "Desfilando", "Chuva de Disparos", "Metendo Bala"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/MissFortune_ChampionList.jpg",
    altImage: "Campeã Miss Fortune apontando sua pistola com a mão esquerda e assoprando o cano da pistola que está na mão direita, que acabou de disparar com a fumaça ainda visível. Ela está no deque de um navio à velas no mar aberto, outro navio aparece de fundo."
},
{
    name: "Morgana",
    link: "morgana",
    subtitle: "A caída",
    difficulty: 1,
    function: "Mago",
    lane: "Inferior",
    description: "Dividida entre sua natureza mortal e celestial, Morgana prendeu as asas para preservar sua humanidade e inflige sua dor e amargura nos desonestos e corruptos.",
    abilities: ["Sifão da Alma", "Ligação das Trevas", "Sombra Atormentada", "Escudo Negro", "Grilhões da Alma"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Morgana_ChampionList.jpg",
    altImage: "Campeã Morgana, voando com suas asas acorrentadas, invocando poder com suas mãos."
},
{
    name: "Nautilus",
    link: "nautilus",
    subtitle: "O titã das profundezas",
    difficulty: 2,
    function: "Tanque",
    lane: "Inferior",
    description: "Levado por uma traição esquecida, ele ataca sem aviso, balançando sua enorme âncora para salvar os náufragos e arrastar os gananciosos para sua perdição.",
    abilities: ["Âncora Impactante", "Lançar Âncora", "Ira do Titã", "Correnteza", "Carga de Profundidade"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Nautilus_ChampionList.jpg",
    altImage: "Campeão Nautilus saindo das profudezas da água utilizando sua âncora em uma pedra."
},
{
    name: "Neeko",
    link: "neeko",
    subtitle: "A camaleoa curiosa",
    difficulty: 2,
    function: "Mago",
    lane: "Superior",
    description: "Nativa de uma tribo vastaya há muito esquecida, Neeko consegue se misturar em qualquer multidão, assumindo a aparência dos outros.",
    abilities: ["Encanto Inerente", "Explosão Florescente", "Metamorfa", "Farpas Emaranhadas", "Florescer Repentino"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Neeko_ChampionList.jpg",
    altImage: "Campeã Neeko no meio de uma floresta encantada observando uma borboleta enquanto está agachada no chão."
},
{
    name: "Pantheon",
    link: "pantheon",
    subtitle: "A lança indestrutível",
    difficulty: 2,
    function: "Lutador",
    lane: "Superior",
    description: "Com o renascimento de um novo Pantheon, e sua inabalável determinação é o que alimenta as armas do antigo Aspecto no campo de batalha.",
    abilities: ["Determinação Mortal", "Lança Meteórica", "Escudo-Cometa", "Égide Impetuosa", "Constelação Cadente"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Pantheon_ChampionList.jpg",
    altImage: "Campeão Pantheon, segurando lança e escudo, com a cabeça levemente abaixada."
},
{
    name: "Pyke",
    link: "pyke",
    subtitle: "O estripador das águas sangrentas",
    difficulty: 2,
    function: "Suporte",
    lane: "Inferior",
    description: "Seus dons trazem um rápido e grotesco fim para aqueles que fazem fortuna explorando os outros.",
    abilities: ["Dádiva dos Afogados", "Espeto de Osso", "Mergulho Fantasma", "Ressaca Espectral", "Morte das Profundezas"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Pyke_ChampionList.jpg",
    altImage: "Campeão Pantheon, segurando lança e escudo, com a cabeça levemente abaixada."
},
{
    name: "Rakan",
    link: "rakan",
    subtitle: "O Charmoso",
    difficulty: 2,
    function: "Suporte",
    lane: "Inferior",
    description: "Inconsistente e charmoso, Rakan é um conhecido encrenqueiro vastaya e o melhor dançarino de batalha da história da tribo Lhotlan.",
    abilities: ["Plumas Mágicas", "Pena Reluzente", "Entrada Triunfal", "Dança da Batalha", "Rapidez"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Rakan_ChampionList.jpg",
    altImage: "Campeão Rakan usando um escudo enquanto olha pro lado onde Xayah está."
},
{
    name: "Rell",
    link: "rell",
    subtitle: "A Dama de Ferro",
    difficulty: 1,
    function: "Tanque",
    lane: "Inferior",
    description: "Rell é uma arma humana rebelde que está determinada a destruir Noxus.",
    abilities: ["A Ferro e Fogo", "Golpe Estilhaçador", "Ferromante: Queda Esmagadora", "Atrair e repelir", "Tempestade Magnética"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Rell_ChampionList.jpg",
    altImage: "Campeã Rell sentada em seu cavalo de ferro com sua mega lança em um dia chuvoso."
},
{
    name: "Sejuani",
    link: "sejuani",
    subtitle: "A Fúria do Norte",
    difficulty: 2,
    function: "Tanque",
    lane: "Selva",
    description: "Sejuani é a mãe de guerra Glacinata brutal e implacável da Garra do Inverno, uma das tribos mais temidas de Freljord.",
    abilities: ["Fúria do Norte", "Ataque do Ártico", "Ira do Inverno", "Congelamento Permanente", "Prisão Glacial"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Sejuani_ChampionList.jpg",
    altImage: "Campeã Sejuani montada no seu javali drüvask, Bristle, usando seu mangual de Gelo Verdadeiro para congelar e despedaçar seus inimigos em uma paisagem congelante."
},
{
    name: "Singed",
    link: "singed",
    subtitle: "O químico louco",
    difficulty: 2,
    function: "Tanque",
    lane: "Superior",
    description: "Singed perdeu qualquer noção da humanidade, deixando uma trilha tóxica de miséria e terror no seu caminho.",
    abilities: ["Corrente de Ar Nociva", "Rastro de Veneno", "Mega Adesivo", "Lançar", "Poção da Insanidade"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Singed_ChampionList.jpg",
    altImage: "Campeão Singed correndo em um local fechado e uma névoa tóxica saindo de suas costas. Com o braço direito, segura um escudo e com outra mão, uma garrafa com líquido venenoso."
},
{
    name: "Sion",
    link: "sion",
    subtitle: "O colosso morto-vivo",
    difficulty: 2,
    function: "Tanque",
    lane: "Superior",
    description: "Sion continua a investir na batalha em total abandono, lutando para se lembrar do seu verdadeiro ser entre cada ataque de seu machado.",
    abilities: ["In Gloria Mori", "Golpe Demolidor", "Fornalha da Alma", "Urro do Assassino", "Investida Incontrolável"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Sion_ChampionList.jpg",
    altImage: "Campeão Sion com armadura bruta pregada em carne apodrecida, segurando seu machado olhando para baixo com uma aura vermelha ao seu redor."
},
{
    name: "Sivir",
    link: "sivir",
    subtitle: "A mestra da batalha",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Sivir é uma renomada caçadora de recompensas e capitã mercenária que manipula o comércio nos desertos de Shurima.",
    abilities: ["Pés ligeiros", "Lâmina Bumerangue", "Ricochete", "Escudo de Feitiço", "Na Caçada"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Sivir_ChampionList.jpg",
    altImage: "Campeã Sivir correndo em alta velocidade no deserto, se preparando para lançar seu escudo."
},
{
    name: "Teemo",
    link: "teemo",
    subtitle: "O explorador veloz",
    difficulty: 2,
    function: "Atirador",
    lane: "Superior",
    description: "Um yordle com uma inabalável moral que se orgulha de seguir o Código dos Escoteiros de Bandópolis.",
    abilities: ["Técnicas de Guerrilha", "Dardo Ofuscante", "Mover Depressa", "Tiro Tóxico", "Armadilha Venenosa"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Teemo_ChampionList.jpg",
    altImage: "Campeão Teemo pulando uma raiz de árvora em uma floresta enquanto segura seu lançador de dardos."
},
{
    name: "Thresh",
    link: "thresh",
    subtitle: "O guardião das correntes",
    difficulty: 2,
    function: "Suporte",
    lane: "Inferior",
    description: "É um espírito ambicioso e incansável das Ilhas das Sombras, vive atormentando e corrompendo vítimas de forma lenta e dolorosamente criativa.",
    abilities: ["Condenação", "Setença", "Passagem Sombria", "Esfolar", "A Caixa"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Thresh_ChampionList.jpg",
    altImage: "Campeão Thresh segurando sua corrente e sua lanterna maldita em um ambiente escuro e esverdeado."
},
{
    name: "Tristana",
    link: "tristana",
    subtitle: "A artilheira Yordle",
    difficulty: 2,
    function: "Atirador",
    lane: "Inferior",
    description: "Pisando no mundo pela primeira vez, ela pegou seu canhão de confiança, Boomer, e agora salta para a batalha com coragem e otimismo inabaláveis.",
    abilities: ["Tiro certeiro", "Tiro rápido", "Salto Foguete", "Carga Explosiva", "Tiro Destruidor"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Tristana_ChampionList.jpg",
    altImage: "Campeã Tristana segurando seu canhão, Boomer, se preparando para atirar e fazendo uma continência com sua mão direita."
},
{
    name: "Viego",
    link: "viego",
    subtitle: "O rei destruído",
    difficulty: 2,
    function: "Assassino",
    lane: "Selva",
    description: "Poderoso espectro morto-vivo que assola Runeterra em busca de trazer sua rainha de volta à vida.",
    abilities: ["Dominação Monárquica", "Espada do Rei Destruído", "Posse Espectral", "Domínio Atormentado", "Destruidor de Corações"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Viego_ChampionList.jpg",
    altImage: "Campeão Viego, segurando sua espada verde florescente envolto por ondas de sombras negras."
},
{
    name: "Xerath",
    link: "xerath",
    subtitle: "O mago ascendente",
    difficulty: 3,
    function: "Mago",
    lane: "Inferior",
    description: "Xerath é um mago Ascendente da antiga Shurima, um ser de energia arcana que existe em meio a estilhaços de um sarcófago mágico.",
    abilities: ["Oscilação de Mana", "Pulso Arcano", "Olho da Destruição", "Orbe Eletrizante", "Ritual Arcano"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Xerath_ChampionList.jpg",
    altImage: "Campeão Xerath ressurgindo das areias do deserto com pedaços de pedra flutuando ao seu redor."
},
{
    name: "Yasuo",
    link: "yasuo",
    subtitle: "O imperdoável",
    difficulty: 3,
    function: "Lutador",
    lane: "Meio",
    description: "Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos.",
    abilities: ["Estilo do Errante", "Tempestade de Aço", "Parede de Vento", "Espada Ágil", "Último Suspiro"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Yasuo_ChampionList.jpg",
    altImage: "Campeão Yasuo sentando sob uma montanha, de olhos fechados, segurando sua lâmina. Com uma casa de madeira e palha ao fundo e folhas voando."
},
{
    name: "Yone",
    link: "yone",
    subtitle: "O inesquecido",
    difficulty: 3,
    function: "Assassino",
    lane: "Meio",
    description: "Condenado a usar uma máscara demoníaca, Yone busca incansavelmente essas criaturas para tentar entender o que ele mesmo se tornou.",
    abilities: ["Estilo do Caçador", "Aço Mortal", "Fenda Espirituaç", "Desatar da Alma", "Destino Selado"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Yone_ChampionList.jpg",
    altImage: "Campeão Yone parado no meio de um vilarefo sob o luar, usando uma máscara demoníaca segurando o cabo da sua espada. Com folhas voado ao seu redor."
},
{
    name: "Yuumi",
    link: "yuumi",
    subtitle: "A gata mágica",
    difficulty: 1,
    function: "Suporte",
    lane: "Inferior",
    description:"Guardiã do Livro dos Portais de Norra, viajando à procura de sua mestra através dos portais.",
    abilities: ["Bater e Bloquear", "Projétil Errante", "Você e eu!", "Frenética", "Capítulo Final"],
    freeChampionRotation: false,
    linkImage: "./images/Champions/Yuumi_ChampionList.jpg",
    altImage: "Campeã Yuumi, uma gatinha branca sentada sob um livro de capa dura aberto."
},
{
    name: "Zed",
    link: "zed",
    subtitle: "O mestre das sombras",
    difficulty: 2,
    function: "Assassino",
    lane: "Meio",
    description:"É o líder da Ordem das Sombras, organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos.",
    abilities: ["Desprezo pelos fracos", "Shuriken Laminado", "Sombra Viva", "Corte Sombrio", "Marca Fatal"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Zed_ChampionList.jpg",
    altImage: "Campeão Zed agachado sob uma pilastra, com uma cidade de fundo, usando sua armadura com lâminas."
},
{
    name: "Zoe",
    link: "zoe",
    subtitle: "O aspecto do crepúsculo",
    difficulty: 2,
    function: "Mago",
    lane: "Meio",
    description:"Como a personificação da travessura, imaginação e mudança, Zoe atua como a mensageira cósmica de Targon.",
    abilities: ["Brililim!", "Estrela Desviada!", "Roubo Arcano", "Bolha do Soninho", "Salto Dimensional"],
    freeChampionRotation: true,
    linkImage: "./images/Champions/Zoe_ChampionList.jpg",
    altImage: "Campeã Zoe flutuando com seu cabelo longo a envolvendo com o brilho do crepúsculo ao seu redor, fazendo um círculo com os dedos em cima do seu olho direito e levemente sorrindo de forma infantil."
}
]

//Função para fazer a média de dificuldade de todos os campões
const averageDifficulty = (champions) => {
    let sum = 0
    let average 
    for (let i in champions) {
        sum = sum + champions[i].difficulty
        average = sum/3;
    }
    return average
}

console.log("Essa é média de dificuldade de todos os campeões:", averageDifficulty(champions).toFixed(1));

//Função para checar se todos os campões estão na Rotação Gratuita
const checkFreeChampionRotation = (champions) => {
    let comparison
    let check = true
    for (let i in champions) {
            comparison = champions[i].freeChampionRotation
            check = check&&comparison
        }
    return check
}
    
console.log("Todos os campeões estão em rotação gratuita?", checkFreeChampionRotation(champions));


//RELATÓRIO REFATORADO USANDO LAÇOS

//ANTIGO USANDO SOMENTE LAÇOS
// function report(champions) {
//     for(champion of champions){
//         for (property in champion){
//             if(Array.isArray(champion[property])){
//                     console.log(`${property}: ${champion[property].join(", ")}`)
//             } else {
//                     console.log(`${property}: ${champion[property]}`)
//             }
//         }
//     console.log(`\n`);
//     }
// }

// report(champions)

//NOVO USANDO LAÇOS, MAS EM UMA ÚNICA STRING E SEM LINKS
function printing(champions) {

    for(champion of champions){

        let rotation 
        if(champion.freeChampionRotation === true){
            rotation = "Está em rotação gratuita!"
        } else{
         rotation = "Não está em rotação gratuita!"
        }

       console.log(`Nome da(o) campeã(o): ${champion.name}, ${champion.subtitle}.\nUma breve descrição: ${champion.description}cSua dificuldade é ${champion.difficulty}, sua função é de ${champion.function} e sua rota sugerida é a ${champion.lane}. Sua habilidades contam com: ${champion.abilities.join(", ")}.\n${rotation}`);

       console.log(`\n`);
    }
}

printing(champions)

//Verificar quais campeões estão na Rotação Gratuita
let championsFreeRotation = []

function freeRotation (champions) {
    for(i in champions){
    if (champions[i].freeChampionRotation) {
        championsFreeRotation.push(champions[i])
    } else {
        //TROCA DO ALERT PRO CONSOLE.LOG
        console.log( `${champions[i].name} não adicionado(a), pois não faz parte da Rotação Gratuita dessa semana.`)
    }
    }
}

freeRotation(champions)
console.log(championsFreeRotation)


//Retornar Objeto
function returnObject (array, string){

    let returnObject

    for(i in array){
        if (array[i].name.toUpperCase() === string.toUpperCase()) {
            returnObject = array[i]
            console.log(returnObject)
            break
        } else {
            returnObject = "Não encontrado."
        }
    } 

    if (returnObject === "Não encontrado."){
        // alert( `${string} não foi encontrado.`)
        console.log(`${string} não foi encontrado.`)
    }
    return(returnObject)
}
returnObject(champions, "Su")


//INSERINDO ELEMENTOS NO HTML MANIPULANDO DOM

const addChampions = () => {
    const championsList = document.getElementById("champions-list")
    championsList.innerHTML = ""

    for (let i in champions){

    const champion = `<div class="champion">
    <img class="champion-img" src=${champions[i].linkImage} alt=${champions[i].altImage}>

    <ul>
        <li class="line-1"><h1><a href="https://www.leagueoflegends.com/pt-br/champions/${champions[i].link}/">${champions[i].name}</a></h1></li>

        <li class="line-2"><h2>${champions[i].subtitle}</h2></li>

        <!-- DIFICULDADE -->
        <li class="line-3">
            <div class="difficulty" id="champion-difficulty">
            ${champions[i].difficulty === 1 ? '<span class="barra-1"></span><span class="barra-2"></span><span class="barra-2"></span>' : champions[i].difficulty === 2 ? '<span class="barra-1"></span><span class="barra-1"></span><span class="barra-2"></span>' : '<span class="barra-1"></span><span class="barra-1"></span><span class="barra-1"></span>'}
            </div>
            <p>Dificuldade</p>
            <p class="highlight">${champions[i].difficulty === 1 ? 'Baixa' : champions[i].difficulty === 2 ? 'Moderada' : 'Alta'}</p>
        </li>

        <!-- FIM DIFICULDADE -->
        
        <li class="line-4">
            <img class="champion-icon" src="./images/${champions[i].function.toLowerCase()}.svg">
            <p>Função</p>
            <p class="highlight">${champions[i].function}</p>
        </li>
    
        <li class="line-5">
            <img class="champion-icon" src="./images/rota-${champions[i].lane.toLowerCase()}.svg">
            <p>Rota sugerida</p>
            <p class="highlight">${champions[i].lane}</p>
        </li>

        <li class="line-6">
            <p>${champions[i].description}</p>
        </li>

        <li class="line-7">
            <p><span class="strong">Habilidades:</span> ${champions[i].abilities.join("; ")}</p>
        </li>

        <li class="line-8">
            <p>
            ${champions[i].freeChampionRotation === true ? '<img src="./images/rotação.png"> Está em Rotação Gratuita!' : ''}</p>
        </li>
    </ul>
</div>`
    championsList.innerHTML += champion
    }
}

addChampions()