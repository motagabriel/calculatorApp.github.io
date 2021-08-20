function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();        
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            
            if(el.classList.contains('btn-number')) this.addNumeroDisplay(el);
            if(el.classList.contains('btn-reset')) this.reset();
            if(el.classList.contains('btn-clear')) this.delete();
            if(el.classList.contains('btn-equal')) this.realizaConta();
            
        })
    }

    this.realizaConta = () => {
        try {
            if(this.display.value.includes('x')){
                const charMultiplicacao = [...this.display.value].map(index => {
                    return index.replace('x', '*');
                });
                const multi = charMultiplicacao.join('');
                this.display.value = multi;
            }
            const conta = eval(this.display.value);

            if(!conta) {
                this.display.value = "Indefinido";
            }

            this.display.value = conta;
            this.display.focus();

        }catch(e){
            this.display.value = "Indefinido";
        }
        
    }

    this.addNumeroDisplay = el => {
        this.display.value += el.innerText;
    }

    this.reset = () => {
        this.display.value = '';
    }

    this.delete = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
}
    

const calculadora = new Calculadora();
calculadora.inicia();