const botao = document.querySelector('#btnCalcular')
const outCalcular = document.querySelector(`#outCalcular`)
const outdescricao = document.querySelector(`#outdescricao`)


btnCalcular.addEventListener('click', ()=>{
    const peso = Number(document.querySelector('#peso').value)
    const altura = Number(document.querySelector('#altura').value) 

    let imc = (peso /(altura*altura))
    outCalcular.innerHTML = ` O seu IMC é: ${imc.toFixed(1)}.`

    if(imc < 16.9){
        outdescricao.innerHTML = `Muito abaixo do peso.`
    } if(imc>= 17 && imc<= 18.4){
        outdescricao.innerHTML = `Abaixo do peso.`
    }if(imc >= 18.5 && imc <=24.9){
        outdescricao.innerHTML = `Peso normal.`
    }if(imc >= 25 && imc <= 29.9 ){
        outdescricao.innerHTML = `Acima do peso.`
    }if(imc >= 30 && imc <= 34.9){
        outdescricao.innerHTML = `Obesidade grau 1.`
    }if(imc >= 35 && imc <= 40){
        outdescricao.innerHTML = `Obesidade grau 2.`
    }if(imc > 40){
        outdescricao.innerHTML = `Obesidade grau 3.`
    }
   

})


