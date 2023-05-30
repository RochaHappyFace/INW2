class Produto {
    constructor(id, descricao, ativo, estoque, preco, cor, tamanho) {
      this.id = id;
      this.descricao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preco = preco;
      this.cor = cor;
      this.tamanho = tamanho;
      this.precoTotal = 0;
    }
  }
  
  const pulseira = new Produto(1, "Pulseira de Couro", true, 10, 20, "Preto", 20);
  
  console.log("Bem-vindo à venda de pulseiras de couro!");
  console.log("Produto: " + pulseira.descricao);
  console.log("Preço: R$" + pulseira.preco);
  console.log("Cor: " + pulseira.cor);
  console.log("Tamanho: " + pulseira.tamanho);
  
  const readline = require("readline");
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function comprarPulseiras(quantidade) {
    quantidade = parseInt(quantidade);
  
    if (quantidade <= pulseira.estoque) {
      pulseira.estoque -= quantidade;
      pulseira.precoTotal = pulseira.preco * quantidade;
      console.log(
        `Você comprou ${quantidade} pulseira(s). Estoque restante: ${pulseira.estoque}`
      );
      console.log(`Valor total a pagar: R$${pulseira.precoTotal}`);
    } else {
      console.log("Desculpe, não há estoque suficiente para atender a sua solicitação.");
    }
  
    rl.close();
  }
  
  function adicionarPulseiras(quantidade) {
    quantidade = parseInt(quantidade);
  
    pulseira.estoque += quantidade;
    console.log(
      `Foram adicionadas ${quantidade} pulseira(s) ao estoque. Estoque atual: ${pulseira.estoque}`
    );
  
    rl.close();
  }
  
  rl.question("O que você deseja fazer? (comprar/adicionar) ", (opcao) => {
    if (opcao.toLowerCase() === "comprar") {
      rl.question("Quantas pulseiras você deseja comprar? ", comprarPulseiras);
    } else if (opcao.toLowerCase() === "adicionar") {
      rl.question("Quantas pulseiras você deseja adicionar ao estoque? ", adicionarPulseiras);
    } else {
      console.log("Opção inválida.");
      rl.close();
    }
  });