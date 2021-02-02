function compute()
{
    var result = document.getElementById("result");
    // Cleaning result
    result.innerHTML = '';

    var principal = document.getElementById("principal").value;

    // Validating that principal is a positive number
    if (principal <= 0) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();

        // Do not compute if principal is 0 or less than 0
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = Number(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = Number(new Date().getFullYear()) + years;

    // Forming innerHTML that will go into result
    var html = '<br>';
    html += 'If you deposit <mark>' + principal + '</mark>,<br>';
    html += 'at an interest rate of <mark>' + rate + '%</mark>.<br>';
    html += 'You will receive an amount of <mark>' + interest + '</mark>,<br>';
    html += 'in the year <mark>' + year + '</mark>';
    
    result.innerHTML = html;
}

function showRange()
{
    var rangeSpan = document.getElementById("rate-span");
    rangeSpan.innerHTML = document.getElementById("rate").value + ' %';
}
        