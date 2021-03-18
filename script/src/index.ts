//Witam elo
class Start{
    a: HTMLInputElement;
    b: HTMLInputElement;
    c: HTMLInputElement;
    d: HTMLInputElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        this.getinputs();
        this.inputvalues();
    }

    getinputs(){
        this.a = document.querySelector('#value1');
        this.b = document.querySelector('#value2');
        this.c = document.querySelector('#value3');
        this.d = document.querySelector('#value4');
        this.sumInput = document.querySelector('#data1')
        this.avgInput = document.querySelector('#data2')
        this.minInput = document.querySelector('#data3')
        this.maxInput = document.querySelector('#data4')
    }

    inputvalues(){
        this.a.addEventListener('input', () => this.dane());
        this.b.addEventListener('input', () => this.dane());
        this.c.addEventListener('input', () => this.dane());
        this.d.addEventListener('input', () => this.dane());
    }

    dane() {
        const value1 = parseFloat(this.a.value);
        const value2 = +this.b.value;
        const value3 = +this.c.value;
        const value4 = +this.d.value;
        console.log("XD");

        const sum = value1+value2+value3+value4;
        const avg = sum /4;
        const min = Math.min(value1,value2,value3,value4);
        const max = Math.max(value1,value2,value3,value4);

        this.show(sum,avg,min,max);
    }

    show(data1: Number, data2: Number, data3: Number, data4: number){
        this.sumInput.value = data1.toString();
        this.avgInput.value = data2.toString();
        this.minInput.value = data3.toString();
        this.maxInput.value = data4.toString();

    }

}

const stats = new Start();

