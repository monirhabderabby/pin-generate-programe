document.getElementById('get-pin').addEventListener('click', function(){
    getPin();
    const input = document.getElementById('pin-input');
    input.value = getPin();
})

function getPin(){
    const generatePin = Math.round(Math.random()*10000);
    const pin = generatePin + '';
    if(pin.length == 4){
        return generatePin;
    }
    else{
        return getPin();
    }
}

document.getElementById('calc-body').addEventListener('click', function(event){
    const number = event.target.innerText;
    const input = document.getElementById('calc-input');
    const previousPin = input.value;
    const newPin = previousPin+number;
    input.value = newPin;
})

// Check Pin match
document.getElementById('submit').addEventListener('click', function(event){
    event.stopPropagation() 
    const pin = document.getElementById('pin-input').value;
    const submitPin = document.getElementById('calc-input').value;
    if(pin == submitPin){
        const messege = document.getElementById('pin-match');
        messege.style.display = 'block'
    }
    else{
        const messege = document.getElementById('pin-not-match');
        messege.style.display = 'block'
    }
})