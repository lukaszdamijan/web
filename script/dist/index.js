class Start {
    constructor() {
        this.startApp();
    }
    startApp() {
        this.getOutputs();
        this.getInputSelector();
    }
    getOutputs() {
        this.sumInput = document.querySelector('#data1');
        this.avgInput = document.querySelector('#data2');
        this.minInput = document.querySelector('#data3');
        this.maxInput = document.querySelector('#data4');
    }
    getInputSelector() {
        this.number = document.querySelector('#input-selector');
        this.generateInputs();
        this.number.addEventListener('input', () => this.generateInputs());
    }

    generateInputs() {
        let numberSelector = document.querySelector('.data-input');
        numberSelector.innerHTML = "";
        for (let i = 1; i <= +this.number.value; i++) {
            let input = '<input id="in' + i + '" class="inputs" type="text">';
            numberSelector.innerHTML += input;
        }
        for (let i = 1; i <= +this.number.value; i++) {
            var input = document.querySelector("#in" + i);
            input.addEventListener('input', () => this.refresh());
        }
    }
    refresh() {
        var sum = 0;
        var min = undefined;
        var max = undefined;
        var count = 0;
        for (let i = 1; i <= +this.number.value; i++) {
            var input = document.querySelector("#in" + i);
            if (input.value == "")
                continue;
            sum += +input.value;
            if (min == undefined || input.value < min) {
                min = +input.value;
            }
            if (max == undefined || input.value > max) {
                max = +input.value;
            }
            count++;
        }
        let avg = sum / count;
        this.show(sum, avg, min, max);
    }

    show(data1, data2, data3, data4) {
        this.sumInput.value = data1.toString();
        this.avgInput.value = data2.toString();
        this.minInput.value = data3.toString();
        this.maxInput.value = data4.toString();
    }
}
const stats = new Start();
