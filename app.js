window.onload = () => {
    const button = (document.querySelector('#btn'));
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || height < 0) {
        result.innerText = "please provide a valid weight";
        return;
    }
    const bmi = (weight / (height * height/ 10000)).toFixed(2);
    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Overweight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (class 1): ${bmi}`;
    } else if (bmi >= 35 && bmi < 39.9) {
        result.innerText = `Obesity (class 2): ${bmi}`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
}   
