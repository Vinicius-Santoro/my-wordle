let targetWords = [
    "conta",
    "atrio",
    "tocar",
    "verbo",
    "pardo",
    "lindo",
    "trupe",
    "aurea",
    "fenda",
    "coito",
    "livre",
    "dessa",
    "sabia",
    "alcar",
    "viria",
    "opaco",
    "navio",
    "fraco",
    "retem",
    "afora",
    "ficha",
    "jirau",
    "etico",
    "astro",
    "faixa",
    "parca",
    "elite",
    "festa",
    "supra",
    "oxala",
    "lidar",
    "glosa",
    "autor",
    "mente",
    "verba",
    "tinha",
    "firme",
    "cioso",
    "fatos",
    "magia",
    "grata",
    "fatal",
    "bater",
    "calda",
    "reses",
    "manha",
    "pique",
    "cousa",
    "junco",
    "prive",
    "deixa",
    "irmao",
    "salve",
    "pagao",
    "molho",
    "macio",
    "douto",
    "abriu",
    "atual",
    "light",
    "bicho",
    "supor",
    "torso",
    "posto",
    "turvo",
    "asilo",
    "igneo",
    "sexta",
    "orfao",
    "extra",
    "judeu",
    "vezes",
    "sarca",
    "curso",
    "caber",
    "rouca",
    "locus",
    "besta",
    "longe",
    "pisar",
    "porta",
    "drops",
    "desta",
    "radio",
    "cânon",
    "abuso",
    "ruina",
    "zelar",
    "video",
    "combo",
    "vosso",
    "bioma",
    "ereto",
    "paira",
    "finda",
    "culpa",
    "vinha",
    "menos",
    "agudo",
    "baixo",
    "feudo",
    "facto",
    "bonus",
    "tetra",
    "advir",
    "urgia",
    "estio",
    "cutis",
    "surja",
    "traco",
    "meigo",
    "nosso",
    "sitio",
    "super",
    "gosto",
    "autos",
    "calao",
    "tento",
    "facho",
    "suave",
    "rumor",
    "amena",
    "pilar",
    "cocho",
    "museu",
    "turma",
    "clean",
    "lasso",
    "chama",
    "aces",
    "geral",
    "acola",
    "louca",
    "optar",
    "pifia",
    "podio",
    "lapis",
    "local",
    "medir",
    "boato",
    "mosto",
    "hobby",
    "julia",
    "rubro",
    "crime",
    "penta",
    "pacto",
    "letal",
    "folga",
    "ponha",
    "refem",
    "drama",
    "brabo",
    "poema",
    "cacho",
    "pareo",
    "cover",
    "aroma",
    "vigia",
    "movel",
    "mesma",
    "hoste",
    "feroz",
    "aluno",
    "vetar",
    "pasmo",
    "fazia",
    "peito",
    "acude",
    "rival",
    "monte",
    "golpe",
    "metie",
    "finjo",
    "avida",
    "troca",
    "axila",
    "coral",
    "ecoar",
    "teste",
    "forum",
    "chato",
    "licao",
    "riste",
    "daqui",
    "piada",
    "plebe",
    "lesse",
    "forem",
    "monge",
    "artur",
    "clima",
    "poeta",
    "sucia",
    "carta",
    "verde",
    "cetro",
    "ebano",
    "passa",
    "escol",
    "swing",
    "tacha",
    "macro",
    "ateia",
    "falha",
    "venha",
    "briga",
    "calmo",
    "sarau",
    "roupa",
    "conto",
    "viram",
    "broxa",
    "busca",
    "cargo",
    "farta",
    "fruto",
    "tarde",
    "idoso",
    "perco",
    "legua",
    "atimo",
    "plaga",
    "plumo",
    "aviso",
    "tribo",
    "berro",
    "chefe",
    "vento",
    "virar",
    "grama",
    "civil",
    "corso",
    "arado",
    "surto",
    "assar",
    "seixo",
    "estro",
    "bruta",
    "saldo",
    "traje",
    "catre",
    "ornar",
    "recem",
    "nuvem",
    "beijo",
    "pedra",
    "deste",
    "troca",
    "fosso",
    "manga",
    "manga",
    "giria",
    "unica",
    "trato",
    "impia",
    "casar",
    "depor",
    "vedar",
    "deram",
    "porte",
    "arfar",
    "ticao",
    "uteis",
    "benca",
    "magna",
    "irado",
    "âmbar",
    "grota",
    "canso",
    "amiga",
    "cifra",
    "amado",
    "silvo",
    "tutor",
    "sosia",
    "bazar",
    "gabar",
    "pasma",
    "vazao",
    "tiver",
    "rural",
    "itens",
    "bruto",
    "laudo",
    "renda",
    "regio",
    "pavor",
    "perto",
    "jejum",
    "segar",
    "bucho",
    "midia",
    "tchau",
    "nesse",
    "inter",
    "troco",
    "minar",
    "feita",
    "odiar",
    "vagar",
    "molde",
    "pinho",
    "viado",
    "orgao",
    "clero",
    "fossa",
    "vadio",
    "areia",
    "lesto",
    "sotao",
    "meche",
    "pomar",
    "aviar",
    "negar",
    "cenho",
    "canto",
    "lesao",
    "mamae",
    "cinto",
    "largo",
    "rocha",
    "paiol",
    "ileso",
    "visto",
    "horto",
    "bolsa",
    "proto",
    "ruido",
    "pugna",
    "inves",
    "marca",
    "podar",
    "densa",
    "guria",
    "stand",
    "close",
    "morfo",
    "amada",
    "urdir",
    "bunda",
    "ufano",
    "vista",
    "jogar",
    "xucro",
    "vasta",
    "dubia",
    "mocho",
    "civel",
    "frota",
    "penso",
    "chula",
    "bulir",
    "umido",
    "cheia",
    "piche",
    "culta",
    "linha",
    "ubere",
    "peita",
    "esgar",
    "varoa",
    "resto",
    "canil",
    "apear",
    "misto",
    "manto",
    "fundo",
    "demao",
    "natal",
    "monta",
    "agape",
    "narco",
    "fazes",
    "tenha",
    "findo",
    "barao",
    "campa",
    "gemer",
    "nessa",
    "santo",
    "cerca",
    "jazer",
    "chaga",
    "volta",
    "simio",
    "album",
    "preco",
    "velha",
    "mover",
    "retro",
    "polis",
    "ardis",
    "cosmo",
    "logos",
    "labia",
    "letra",
    "verao",
    "venho",
    "folia",
    "seiva",
    "banto",
    "ferpa",
    "punha",
    "matar",
    "alamo",
    "troco",
    "sabor",
    "nesta",
    "porca",
    "etapa",
    "audio",
    "ceita",
    "barro",
    "calca",
    "trago",
    "rente",
    "sigla",
    "coroa",
    "axial",
    "louro",
    "salva",
    "final",
    "firma",
    "redor",
    "arroz",
    "limpo",
    "bolso",
    "torna",
    "tumba",
    "coevo",
    "miope",
    "solta",
    "enjoo",
    "queda",
    "lutar",
    "lousa",
    "baixa",
    "farol",
    "ousar",
    "fugiu",
    "folha",
    "mimar",
    "neste",
    "danca",
    "corar",
    "zumbi",
    "sinta",
    "veloz",
    "burra",
    "nacar",
    "obtem",
    "longo",
    "reler",
    "cacto",
    "macho",
    "fatuo",
    "salmo",
    "penca",
    "forro",
    "vazia",
    "vario",
    "justa",
    "calor",
    "farto",
    "quite",
    "bedel",
    "mania",
    "todas",
    "sugar",
    "lucro",
    "gueto",
    "chave",
    "puido",
    "repor",
    "staff",
    "calvo",
    "ultra",
    "logia",
    "sexto",
    "merda",
    "subir",
    "custo",
    "refil",
    "passe",
    "urgir",
    "viger",
    "sadio",
    "mimos",
    "harem",
    "versa",
    "valer",
    "hifen",
    "lento",
    "usual",
    "socio",
    "redea",
    "cardo",
    "mouro",
    "ardua"
]