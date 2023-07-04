//finding elements

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const btn = document.querySelector('.btn');

//counter

let numbers = {
    keys: 0,
    clicks: 0
}

let save = loading();
if(save != null){
    numbers = save;
}

render();

document.addEventListener('keydown', event => {
    numbers.keys++;
    saving();
    render();
})

document.addEventListener('click', event => {
    numbers.clicks++;
    saving();
    render();
})

function render(){
    number1.textContent = numbers.keys;
    number2.textContent = numbers.clicks;
}

//delete

btn.addEventListener('click', event => {
    numbers.keys = 0;
    numbers.clicks = 0 - 1;
    render();
})

//localStorage

function saving(){
    let save = JSON.stringify(numbers);
    localStorage.setItem('counter', save);
}

function loading(){
    let load = localStorage.getItem('counter');
    if (load == null){
        return null;
    }
    return JSON.parse(load);
}