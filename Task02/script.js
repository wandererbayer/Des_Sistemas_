// alert("teste")

function calc(id1, id2, respId, operador)
{
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    console.log(num1, num2)

    var resultado;

    switch (operador) 
    {
        case "+":
            resultado = num1 + num2
            break;

        case "-":
            resultado = num1 - num2
            break;

        case "*":
            resultado = num1 * num2
            break;

        case "/":
            if(num2 !== 0)
            {
                resultado = num1 / num2
            }
            else
            {
                resultado = "Erro: Divisão por Zero."
            }
            break;
    
        default:
            resultado = "Operador Inválido."
    }

    document.getElementById(respId).textContent = resultado
}