
/* Nome: 
Slogan: 
História:
Data de lançamento: 
Função: 
Dificuldade: 
Habilidades: 
Rota sugerida:
Feitiço de Invocador:
Está em rotação gratuita? */


const champions = [
{
name: "Annie",
function: "Mago",
difficulty: 2,
abilities: ["Piromania", "Desintegrar", "Incinerar", "Escudo Fundido", "Invocar: Tibbers"],
freeChampionRotation: false,
linkImage: "./images/Champions/Annie_ChampionList.jpg"
},
{
name: "Viego",
function: "Assassino",
difficulty: 2,
abilities: ["Dominação Monárquica", "Espada do Rei Destruído", "Posse Espectral", "Domínio Atormentado", "Destruidor de corações"],
freeChampionRotation: true,
linkImage: "./images/Champions/Viego_ChampionList.jpg"
},
{
name: "Yuumi",
function: "Suporte",
difficulty: 1,
abilities: ["Bater e Bloquear", "Projétil Errante", "Você e eu!", "Frenética", "Capítulo Final"],
freeChampionRotation: true,
linkImage: "./images/Champions/Yuumi_ChampionList.jpg"
}
]

//Função para fazer a média de dificuldade de todos os campões
const averageDifficulty = (champions) => {
    let sum = 0
    let average 
    for (d in champions) {
        sum = sum + champions[d].difficulty
        average = sum/3;
    }
    return average
}

console.log("Essa é média de dificuldade de todos os campeões:", averageDifficulty(champions).toFixed(1));

//Função para checar se todos os campões estão na Rotação Gratuita
const checkFreeChampionRotation = (champions) => {
    let comparison
    let check = true
    for (i in champions) {
            comparison = champions[i].freeChampionRotation
            check = check&&comparison
        }
    return check
}
    
console.log("Todos os campeões estão em rotação gratuita?", checkFreeChampionRotation(champions));


//relatório alterado usando laços
function report(champions) {
    for(champion of champions){
        for (property in champion){
            if(Array.isArray(champion[property])){
                    console.log(`${property}: ${champion[property].join(", ")}`)
            } else {
                    console.log(`${property}: ${champion[property]}`)
            }
        }
    console.log(`\n`);
    }
}

report(champions)

//Verificar quais campeões estão na Rotação Gratuita
let championsFreeRotation = []

function freeRotation (champions) {
    for(i in champions){
    if (champions[i].freeChampionRotation) {
        championsFreeRotation.push(champions[i])
    } else {
        alert( `${champions[i].name} não adicionado(a), pois não faz parte da Rotação Gratuita dessa semana.`)
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
        } else {
            returnObject = "Não encontrado."
        }
    } 

    if (returnObject === "Não encontrado."){
        alert( `${string} não foi encontrado.`)
        console.log(`${string} não foi encontrado.`)
    }

    return(returnObject)
}

returnObject(champions, "Su")