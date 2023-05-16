//CLASSES//

class Conta {
    constructor(numero, cpf, saldo, ativo) {
        this.numero = numero
        this.cpf = cpf
        this.saldo = saldo
        this.ativo = ativo

    }
    ativar() {
        this.ativo = true
    }
    credito(valor) {
        if (this.ativo) {
            this.ativo += valor
        }
        else {
            console.log("Conta Inativa")
        }
    }
    debito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("Impossível realizar, valor negativo")
            }

            else if (valor == 0) {
                console.log("Impossível realizar, valor zerado")
            }
            else if (valor > this.saldo) {
                console.log("Immpossível realziar, saldo indisponível")
            }
            else {
                this.saldo -= valor
            }
        }
        else {
            console.log("Conta Inativa")
        }
    }
}

//  PROGRAMA PRINCIPAL//

const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o número da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new Conta(numero, cpf, 0, false)
let op =""
c1.credito(100)
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("Movimento :" + x)
    console.log("Saldo atual conta" + c1.saldo)
    
    op=leia("Digite D - debito ou C para credito : ")
    if(op=="D"){
        valor=leia("Digite o valor para débito : ")
        c1.debito(valor)
    }
    else if(op=="C"){
        valor=leia("Digite o valor para crédito : ")
        c1.credito(valor)
    }
    console.log("Saldo final" + c1.saldo)
 
}

