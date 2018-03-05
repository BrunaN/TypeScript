abstract class Conta {
    protected saldo: number;
    protected numero: number;

    constructor(saldo: number, numero: number){
        this.saldo = saldo;
        this. numero = numero;
    }

    public depositar(valor: number):void{
        this.saldo += valor;
        console.log("Deposito realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    };

    abstract sacar(saque:number):void;
    abstract valorizar():void;
}

interface Rendimento {
    gerar_relatorio():void;
}

class Conta_corrente extends Conta{
    constructor(saldo: number, numero:number){
        super(saldo, numero);
    }

    sacar(saque:number):void{
        this.saldo = this.saldo - saque - 2;
        console.log("Saque realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    }

    valorizar():void{
        this.saldo;
    };
}

class Conta_poupanca extends Conta implements Rendimento{
    rendimento_atual: number = 0;

    constructor(saldo: number, numero: number){
        super(saldo, numero);
    }

    sacar(saque:number):void{
        this.saldo = this.saldo - (saque*0.02) - saque;
        console.log("Saque de realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    }

    private calcular_rendimento(): void{
        this.rendimento_atual = this.rendimento_atual + (this.saldo*0.02);
    };

    valorizar():void{
        this.calcular_rendimento();
        this.saldo = this.saldo + (this.saldo*0.02);
    }

    gerar_relatorio():void{
        console.log("Conta Poupança, Número da conta: " + this.numero + ", Saldo atual: " + this.saldo + ", Rendimento: "+ this.rendimento_atual);
    }
}

class Conta_investimento extends Conta implements Rendimento{
    rendimento_atual: number = 0;

    constructor(saldo: number, numero:number){
        super(saldo, numero);
    }

    sacar(saque:number):void{
        this.saldo = this.saldo - (saque*0.05) - saque - 10;
        console.log("Saque realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    }

    private calcular_rendimento(): void{
        this.rendimento_atual = this.rendimento_atual + (this.saldo*0.0051);
    };

    valorizar():void{
        this.calcular_rendimento();
        this.saldo = this.saldo + this.saldo*0.0051;
    }

    gerar_relatorio():void{
        console.log("Conta Investimento, Número da conta: " + this.numero + ", Saldo atual: " + this.saldo + ", Rendimento: " + this.rendimento_atual);
    }
}

let corrente = new Conta_corrente(100, 9999);
corrente.sacar(50);
corrente.depositar(70);

let poupanca = new Conta_poupanca(10, 10000);
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.sacar(5);
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.depositar(100);
poupanca.gerar_relatorio();

let investimento = new Conta_investimento(500, 10011);
investimento.sacar(20);
investimento.valorizar();
investimento.gerar_relatorio();
investimento.depositar(500);