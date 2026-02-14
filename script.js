// Events for numbers and operators
let screen = document.querySelector('#calScreen')
let nodelist = document.querySelectorAll('.number-button, .operator-button')
nodelist.forEach((key)=>
    key.addEventListener('click', (e)=>{
        // let screen = document.getElementById("display").querySelector('#calScreen')
        let keyValue = e.target.value
        if(screen.value === '0'){
            screen.value = keyValue
        }
        else{
            screen.value += keyValue
        }
    }, false)
)

// Event for clear and =
document.querySelector('.reset').addEventListener('click', (e)=>{
    document.querySelector('#calScreen').value = 0
})
document.querySelector('.return-button').addEventListener('click', (e)=>{
    try{
        screen.value = eval(screen.value)
    }
    catch(error){
        screen.value = error
    }
    
})
