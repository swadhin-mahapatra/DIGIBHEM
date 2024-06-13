let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string = '';

buttons.forEach(btn => {

    btn.addEventListener('click', (e)=> {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else if(e.target.innerHTML == '%'){
            string = eval(string+ "/100");
            display.value = string;
        }else if(e.target.id == 'plusMinus'){
            string = String(-eval(string));
            inputBox.value = string;
        }else if(e.target.innerHTML == 'ln'){
            let num = parseFloat(string);
            num = Math.log(num).toFixed(5);
            inputBox.value = ""+num;
        }else if(e.target.innerHTML == 'e'){
            string = eval("Math.E");
            display.value = string;
        }else if(e.target.id == 'sqrt'){
            let num = parseFloat(string);
            num = Math.sqrt(num).toFixed(5);
            inputBox.value = ""+num;
        }else if(e.target.id == 'pi'){
            string = eval("Math.PI");
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }

    });

});