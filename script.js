// Events for numbers, decimal and operators
let screen = document.querySelector('#calScreen');
let nodelist = document.querySelectorAll('.number-button, .operator-button, .decimal, .bracket');
nodelist.forEach((key)=>
    key.addEventListener('click', (e)=>{
        let keyValue = e.target.value;
        if(screen.value === '0'){
            screen.value = keyValue;
        }
        else{
            screen.value += keyValue;
        }
    }, false)
)

// Event for clear, = and del
document.querySelector('.reset').addEventListener('click', (e)=>{
    screen.value = 0;
}, false);

document.querySelector('.return-button').addEventListener('click', (e)=>{
    try{
        screen.value = eval(screen.value);
    }
    catch(error){
        screen.value = SyntaxError();
    }
    
}, false);

document.querySelector('.del').addEventListener('click', (e)=>{
    screen.value = (screen.value.length === 1)? '0' : screen.value.slice(0, -1);
}, false);


// Keydown Events
document.body.addEventListener('keydown', (e)=>{
    let keyValue = e.key;
    if(/[\d()+/*-]/.test(keyValue)){      // we didn't use switch case because it compares with strict equality(===)
        if(screen.value === '0'){
            screen.value = keyValue;
        }
        else{
            screen.value += keyValue;
        }
    }
    else if(/=|Enter/.test(keyValue)){
        e.preventDefault();     // to resolve pressing enter bug
        try{
            console.log(screen.value);
            screen.value = eval(screen.value);
            console.log(screen.value);
        }
        catch(error){
            screen.value = SyntaxError();
        }
    }
    else if(keyValue == "Backspace"){
        screen.value = (screen.value.length === 1)? '0' : screen.value.slice(0, -1);
    }

}, false)
