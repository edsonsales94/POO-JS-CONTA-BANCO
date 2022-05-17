export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0;

    depositar(valor){
        if(valor > 0 ){
            this._saldo += valor;
            console.log()
        }
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        }
    }
    trasnferir(valor , conta){
        this.sacar(valor);
        conta.depositar(valor);
    }
   
}