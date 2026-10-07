import { useState } from 'react'
import './App.css'

function App() {
  const[resultado, setResultado] = useState()

 function testar (){
 let nome = prompt('Qual o seu nome: ')
 let bocaDoSapo = nome
 alert(nome + ', seu nome está na boca do sapo 🐸 ')
 
 
}

function calcularpontos(){
  let vitorias = Number(prompt('Numero de vitorias'))
  let empates = Number(prompt('Numero de empates'))

  let pontos = vitorias*3 + empates //*1
  
  alert('o time teu tem ' + pontos )

 }
 function trocarsapatos(){
 // give your jumps
 let qtdpares, precopares, valortotal 
 qtdpares = Number(prompt('Quantidade de pares: '))
 precopares = Number(prompt('Preço de cada par: '))
 valortotal = qtdpares * precopares
 alert('O valor total da troca: R$: ' + valortotal.toFixed(2) )



 }
 function numdevs(){
  let clt, estagiarios, pj

  clt = Number(prompt('quantidade de devs CLT: '))
  estagiarios = Number(prompt('quantidade de devs estagiarios: '))
  pj = Number(prompt('quantidade de devs PJ: '))
  
  let totaldevs = clt + estagiarios + pj
  alert('O total de devs na empresa é: ' + totaldevs)

 }
 function ceotraje(){
  let inlara, filara

  inlara = Number(prompt('quantidade inicial de laranjas: '))
  filara = Number(prompt('quantidade final de larajas: '))

  let totallaranja = inlara - filara

  alert('quantas laranjas foram vendidas: ' + totallaranja)
 }
 function fingre(){
  let custo, doacao
  
  custo = Number(prompt('Os custos mensais da igreja: R$: '))
  doacao = Number(prompt('Quanto foi recebido de doações e dízimos no dia: R$: '))

  let totdaigr = custo - doacao

  alert("oq falta pagar os custos mensais: R$: " + totdaigr )


 }
 function junsal(){
  let salariomensal, diastrabalhados

  salariomensal = Number(prompt('quanto recebe por mes: '))
  diastrabalhados = Number(prompt('dias trabalhados: '))
 
  let recebido = salariomensal / diastrabalhados
  alert('Valor recebido mensal: ' + recebido.toFixed(2) )

  let salariosemanal = recebido *5
  alert('Salario semanal: ' + salariosemanal.toFixed(2))

 }
 function caminhao(){
  let peso, tara
  peso = Number(prompt('Peso bruto: '))
  tara = Number(prompt('Peso da tara: '))
  let carga = peso - tara
  alert('O peso da carga: ' + carga)


 }
 function candev(){
  let chance, n
  n = Number(prompt('quantas vezes ele olhou pro cll:')) 
  chance = (0.1/(1 + 500 * n)) *100

  alert('chane dele ser aprovado cll: ' + chance.toFixed(2) + '%')


 }
 function transpo(){
 let peso, distancia, volume
 peso = Number(prompt('Peso do Frete(KG): '))
 distancia = Number(prompt('Distancia do Frete(KM): '))
 volume = Number(prompt('Volume do Frete(M3): '))

 let frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

 alert('O valor do Frete é R$:' + frete.toFixed(2))


 }
 function dondon(){
 let bruto, premiacoes, presentes, comissoes
 bruto = Number(prompt('Valor Bruto: R$: '))
 premiacoes = Number(prompt('Valor das Premiações: R$: '))
 presentes = Number(prompt('Valor dos Presentes: R$: '))
 comissoes = Number(prompt('Valor das Comissões: R$: '))

 let lucro = bruto - premiacoes - presentes - comissoes

 alert('O seu Lucro: R$: ' + lucro )



 }
 function cap(){
 let gasto, fatuin, fatuitens
 gasto = Number(prompt('Quanto foi gasto em suprimentos e mercadorias para operar seu navio: '))
 fatuin = Number(prompt('Quanto foi o faturamento em venda de ingressos: '))
 fatuitens = Number(prompt('Quando foi o faturamento em venda de ítens: '))

 let lucroreais = fatuin + fatuitens - gasto
 alert('Lucro obtido em reais: ' + lucroreais)
 let porcentagem = (lucroreais / gasto) * 100
 alert('Lucro percentual: ' + porcentagem.toFixed(2) + '%')


 }
 function sarru(){
   let shows, precouni, bombas, custoTotal
   shows = Number(prompt('quantos shows foram realizados: '))
   precouni = Number(prompt('qual o preço unitario do ingresso: '))
   bombas = Number(prompt('quantas bombas foram vendidas: '))
   
   bombas = shows * 7;
   custoTotal = bombas * precouni;

   alert('O faturamento total foi: R$: ' + custoTotal)


 }
 function man(){
  let  salario, moradia, agua, Luz, internet, gasolina, streamings, telefone, outros
  salario = Number(prompt('Qual o valor do seu salário: R$: '))
  moradia = Number(prompt('Qual o valor do seu gasto com moradia: R$: '))
  agua = Number(prompt('Qual o valor do seu gasto com água: R$: '))
  Luz = Number(prompt('Qual o valor do seu gasto com luz: R$: '))
  internet = Number(prompt('Qual o valor do seu gasto com internet: R$: '))
  gasolina = Number(prompt('Qual o valor do seu gasto com gasolina: R$: '))
  streamings = Number(prompt('Qual o valor do seu gasto com streamings: R$: '))
  telefone = Number(prompt('Qual o valor do seu gasto com telefone: R$: '))
  outros = Number(prompt('Qual o valor do seu gasto com outros: R$: '))

  let sobranadaprobeta = salario - moradia - agua - Luz - internet - gasolina - streamings - telefone - outros
  alert('O valor que sobrou na sua probeta: R$: ' + sobranadaprobeta.toFixed(2) )



 }
 function brique(){
    let precoCusto = Number(prompt('Quanto seu Romero pagou na obra de arte?'));

    let lucro = precoCusto * 2;
    let precoVenda = precoCusto + lucro; 

    alert('Preço de venda recomendado: R$ ' + precoVenda.toFixed(2));





 }
  function pet(){
  let racao, precoCusto
  racao = Number(prompt('Qual o valor do custo da ração: R$: '))
  precoCusto = racao /100

  alert('O preço de venda da ração: R$: ' + precoCusto.toFixed(2))


 }
    function carn() {
    let pessoas = Number(prompt('Quantas pessoas vão participar do churrasco?'));

    let carne = pessoas * 0.5;
    let cerveja = pessoas * 1;
    let agua = pessoas * 0.5;
    let refri = pessoas * 0.2;

   alert('Quantidade de carne: ' + carne + ' kg');
   alert('Quantidade de cerveja: ' + cerveja + ' L');
   alert('Quantidade de água: ' + agua + ' L');
   alert('Quantidade de refrigerante: ' + refri + ' L');

  }
  function ja() {
   
  let caminhoes = Number(prompt('Quantos caminhões foram usados: '));

  let jacares = caminhoes * 50;
  let custo = caminhoes * 450;
  let venda = jacares * 90;

  jacares = Number(prompt('Quantos jacares foram vendidos: '))
 
  
  let lucro = venda - custo;

  alert('Lucro da temporada: R$' + lucro);

  }
  function opa() {
   let tokensGastos, numeroDeCaracteres, custoDoToken, tokensUsados, custoTotal

    numeroDeCaracteres = Number(prompt('Quantidade de caracteres: '))
    custoDoToken = Number(prompt('Qual foi o custo dos tokens: '))
    tokensUsados = Number(prompt('Quantos tokens foram usados: '))
    
    tokensGastos = 5 + numeroDeCaracteres
    custoTotal = tokensGastos * custoDoToken
    
    alert('Esse foi gasto dos tokens: $' + custoTotal)
  }
  function junao() {

let horasEstimadasInput = prompt("Digite a quantidade estimada de horas para o desenvolvimento:");


let horasEstimadas = parseFloat(horasEstimadasInput);

if (isNaN(horasEstimadas) || horasEstimadas < 0) {
    alert("Por favor, insira um número válido de horas.");
} else {
    
    let custoConsultor = 500.00;
    let valorHoraJunin = 350.00;

    let precoCliente = custoConsultor + (valorHoraJunin * horasEstimadas);

    let lucroFreela = precoCliente - custoConsultor;

    
    alert(
        "--- Resumo do Freela ---\n" +
        "Horas estimadas: " + horasEstimadas + "h\n" +
        "Preço para cobrar do cliente: R$ " + precoCliente.toFixed(2) + "\n" +
        "Lucro líquido do freela: R$ " + lucroFreela.toFixed(2)
    );
}

  }
  function neve() {
  let relatoriosPF = Number(prompt('Quantos relatórios PF?'));
  let relatoriosPJ = Number(prompt('Quantos relatórios PJ?'));

  let tempoPF = Number(prompt('Quantas horas nos relatórios PF?'));
  let tempoPJ = Number(prompt('Quantas horas nos relatórios PJ?'));

  let valorPF = Number(prompt('Valor recebido de PF?'));
  let valorPJ = Number(prompt('Valor recebido de PJ?'));

  let totalRelatorios = relatoriosPF + relatoriosPJ;
  let tempoTotal = tempoPF + tempoPJ;
  let valorTotal = valorPF + valorPJ;

  let mediaValorPF = valorPF / relatoriosPF;
  let mediaValorPJ = valorPJ / relatoriosPJ;

  let mediaTempoPF = tempoPF / relatoriosPF;
  let mediaTempoPJ = tempoPJ / relatoriosPJ;

alert(
    'RELATÓRIO KOWALSKI\n\n' +
    'Total de relatórios: ' + totalRelatorios + '\n' +
    'Tempo total: ' + tempoTotal + ' horas\n' +
    'Valor total: R$' + valorTotal + '\n\n' +
    'Média valor PF: R$' + mediaValorPF.toFixed(2) + '\n' +
    'Média valor PJ: R$' + mediaValorPJ.toFixed(2) + '\n' +
    'Média tempo PF: ' + mediaTempoPF.toFixed(2) + ' horas\n' +
    'Média tempo PJ: ' + mediaTempoPJ.toFixed(2) + ' horas'
);
  }
  function calcularDobro(){
    let numero = Number(prompt("digite o numero A-GO-RA: "))
    let dobro = numero * 2
    setResultado(dobro)
    
  }
  return (
    <div className="cont-app">
    <h1>JavaScript no React</h1>

    <hr />
    <h2>Usando estados</h2>
    <button onClick={calcularDobro}>Estados - dobro</button>

    <p>
      Resultado da operação: {resultado}
    </p>

    <h2>Exercicios supimpas nivel (a) </h2>
    

    <button onClick={numdevs}>Empresa/RH</button>
    <button onClick={calcularpontos}>Campeonato</button>
    <button onClick={trocarsapatos}>Trocas pé pequeno</button>
    <button onClick={fingre}>Igreja</button>
    <button onClick={caminhao}>Frota da Telles</button>
    <button onClick={ceotraje}> Trajeto Pomar</button>
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    <button onClick={junsal}>Junin</button>
    <button onClick={candev}>Monika</button>
    <hr />
    <h2>Exercicios supimpas nivel (b)</h2>

    <button onClick={transpo}>Telles Transportes</button>
    <button onClick={dondon}>Dona Bete</button>
    <button onClick={cap}>Capitão Ganso</button>
    <button onClick={sarru}>Sarumano</button>
    <button onClick={man}>Mano Juca</button>
    <button onClick={brique}>Romero Brique</button>
    <button onClick={pet}>Pet Shop</button>
    <button onClick={carn}>Churrascaria do Gaúcho</button>
    <hr />
    <h2>Exercicios supimpas nivel (c)</h2>

    <button onClick={ja}>Gael</button>
    <button onClick={opa}>I.A</button>
    <button onClick={junao}>Junin</button>
    <button onClick={neve}>Kovalski</button>
    </div>
    


  )
}

function calcularMedia (){
let nota1 = Number((prompt("Qual o valor da primeira nota:")))
let nota2 = Number((prompt("Qual o valor da segunda nota:")))
let media = (nota1 + nota2) /2;
alert('Sua média final: ' + media)
}

export default App


