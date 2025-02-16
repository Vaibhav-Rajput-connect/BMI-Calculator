const form = document.querySelector('form');
const bmiText = document.getElementById('bmi');
const desText = document.getElementById('des');

form.addEventListener('submit',onFormSubmit);
form.addEventListener('reset',onFormReset);

function onFormReset(){
    bmiText.textContent = 0;
    bmiText.className = '';
    desText.textContent = 'N/A';
}

function onFormSubmit(e){
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        alert('Please enter a valid weight and height');
        return
    }
    const heightInMeters = height / 100;
    const bmi = weight/Math.pow(heightInMeters,2);
    const des = categorybmi(bmi);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = des
    desText.innerHTML = `You are <strong>${des}</strong>`;
}
function categorybmi(bmi){
    if(bmi<18.5){
        return "Underweight";
    }
    else if(bmi<25){
        return "Healthy";
    }
    else if(bmi<30){
        return "Overweight";
    }
    else{
        return "Obese";
    }
}