function translateImc(imc) {
    if (imc < 18.5) return 'magreza';
    else if (imc < 24.9) return 'normal';
    else if (imc < 30.0) return 'sobrepeso';
    else return 'obesidade'
}

function calculate() {
    const height = document.querySelector('#altura').value;
    const weight = document.querySelector('#peso').value;

    const { imc, imcDescription } = calculateImc(height, weight);
    document.querySelector('#imc').innerHTML = `${imc}, ${imcDescription}`;
}

export function calculateImc(height, weight) {
    if (!height) return null;
    if (!weight) return null;

    const imc = Number((weight / (height ** 2)).toFixed(2));
    const imcDescription = translateImc(imc);

    return { imc, imcDescription };
}

export function initialize() {
    document.querySelector('button.action').addEventListener('click', calculate);
}