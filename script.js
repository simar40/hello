var buttons = document.getElementsByTagName("button");
var ans = document.getElementById("result");
var operand1 = 0;
var operand2 = null;
var operator = null;

document.addEventListener("keypress",function(event){
    var val1 = event.key;
    console.log(val1);
    if (val1 == "+" || val1 == "-" || val1 == "*" || val1 == "/") {
        operand1 = parseFloat(ans.textContent);
        operator = val1;
        ans.textContent = "";
    }
    else if(val1 == "%")
    {
        operand1 = parseFloat(ans.textContent);
        
        operand1 = operand1/100;
        ans.textContent = operand1;
    }
    else if(val1 == ".")
    {
        if(!ans.innerHTML.includes('.'))
        {
            ans.innerHTML = ans.innerHTML + ".";
        }
    }
    else if (val1 == "=" || val1 == "Enter") {
        operand2 = parseFloat(ans.textContent);
        var expression = eval(operand1 + ' ' + operator + ' ' + operand2);
        ans.innerText = expression;
        operand1 = result;
        operand2 = null;
        operator = null;
    }
    else {
        ans.innerText += val1;
    }
});

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var val = this.getAttribute("data-value");
        if (val == "+" || val == "-" || val == "*" || val == "/") {
            operand1 = parseFloat(ans.textContent);
            operator = val;
            ans.textContent = "";
        }
        else if(val == "sign")
        {
            operand1 = parseFloat(ans.textContent);
            operand1 = -1 * operand1;
            ans.textContent = operand1;
        }
        else if(val == "%")
        {
            operand1 = parseFloat(ans.textContent);
            
            operand1 = operand1/100;
            ans.textContent = operand1;
        }
        else if(val == ".")
        {
            if(!ans.innerHTML.includes('.'))
            {
                ans.innerHTML = ans.innerHTML + ".";
            }
        }
        else if (val == "=") {
            operand2 = parseFloat(ans.textContent);
            var expression = eval(operand1 + ' ' + operator + ' ' + operand2);
            ans.innerText = expression;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
        else if(val == "AC")
        {
            ans.innerText = "";
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else {
            ans.innerText += val;
        }
    });
}