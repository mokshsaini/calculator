// Events for numbers and operators
let userInput = document.getElementById("display").querySelector('#calScreen').value
let nodelist = document.querySelectorAll('.number-button, .operator-button')
nodelist.forEach((key)=>
    key.addEventListener('click', (e)=>{
        
        let keyValue = e.target.value
        if(userInput === '0'){
            userInput = keyValue
        }
        else{
            userInput += keyValue
        }
        document.querySelector('#calScreen').value = userInput
    }, false)
)

// Event for clear and =
document.querySelector('.reset').addEventListener('click', (e)=>{
    document.querySelector('#calScreen').value = 0
})
document.querySelector('.return-button').addEventListener('click', (e)=>{
    
})
