function GetContractAmount(contractEnum) {
    if (contractEnum == 0) {
        return 0;
    }
    var count = 105;
    var salary = 525000; 
    while (count != contractEnum) {
        salary += 5000;
        count++;
    }
    return numberWithCommas(salary);
}



function numberWithCommas(x) {
    var e = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$" + e;
}


function GetSmallContractNumber(x) {
    var sal = GetContractNumbers(x);
    return sal / 1000000;
}

function GetContractNumbers(contractEnum) {
    if (contractEnum == 0) {
        return 0;
    };
    var count = 105;
    var salary = 525000;
    while (count != contractEnum) {
        salary += 5000;
        count++;
    }
    return salary;
}
