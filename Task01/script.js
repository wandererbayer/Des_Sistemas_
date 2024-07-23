
// alert("Raise Hell")

function somar()
{
    var num1 = parseInt(document.getElementById("n1").value)
    console.log(num1, typeof num1)

    var num2 = parseInt(document.getElementById("n2").value)
    console.log(num2, typeof num2)

    var resp = document.getElementById("respSoma")
    resp.textContent = num1 + num2
    // resp.innerHTML = num1 + num2
    // resp.innerText = num1 + num2
}

function subt()
{
    var num1_sub = parseInt(document.getElementById("n1_sub").value)
    console.log(num1_sub, typeof num1_sub)

    var num2_sub = parseInt(document.getElementById("n2_sub").value)
    console.log(num2_sub, typeof num2_sub)

    var resp_sub = document.getElementById("respSub")
    resp_sub.textContent = num1_sub - num2_sub
}

function divi()
{
    var num1_div = parseInt(document.getElementById("n1_div").value)
    console.log(num1_div, typeof num1_div)

    var num2_div = parseInt(document.getElementById("n2_div").value)
    console.log(num2_div, typeof num2_div)

    var resp_div = document.getElementById("respDiv")
    resp_div.textContent = num1_div / num2_div
}

function mult()
{
    var num1_mult = parseInt(document.getElementById("n1_mult").value)
    console.log(num1_mult, typeof num1_mult)

    var num2_mult = parseInt(document.getElementById("n2_mult").value)
    console.log(num2_mult, typeof num2_mult)

    var resp_mult = document.getElementById("respMult")
    resp_mult.textContent = num1_mult * num2_mult
}

function med()
{
    var num1_med = parseFloat(document.getElementById("n1_med").value)
    console.log(num1_med, typeof num1_med)

    var num2_med = parseFloat(document.getElementById("n2_med").value)
    console.log(num2_med, typeof num2_med)

    var num3_med = parseFloat(document.getElementById("n3_med").value)
    console.log(num3_med, typeof num3_med)

    var media = document.getElementById("respMed")

    var resp_med = (num1_med + num2_med + num3_med) / 3
    // console.log(resp_med)

    if(resp_med >= 7)
    {
        console.log(">= 7")
        media.textContent = resp_med.toFixed(1)
        // media.style.color = "green"
        // media.style.backgroundColor = "#fe5001"
        // media.style.padding = "5px"
    }
    else
    {
        console.log("< 7")
        media.textContent = resp_med.toFixed(1)
        media.style.color = "red"
    }
}

function ite()
{
    const num = parseFloat($("#numeroInput").val())

    var resultadoStr = ""

    if(num <= 100)
    {
        for(var cont = 1; cont <= num; cont++)
        {
            resultadoStr = resultadoStr + cont + "<br>"
        }
        $("#result").html(resultadoStr)
    }
    else
    {
        $("#respIte").text("Digite um número menor que 100")
    }
}