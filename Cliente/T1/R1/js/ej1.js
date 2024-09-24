function checkOperationResult(operation) {

    const operationResult = eval(operation);
    alert(`La operación ${operation} es ${operationResult}`);
}

export function callsCheckOperationResult() {

    checkOperationResult('20 == 20');
    checkOperationResult('20 === 20');
    checkOperationResult('20 === 20.0');
    checkOperationResult('"Juan" === "juan"');
    checkOperationResult('"Juan" > "juan"');
    checkOperationResult('"Juan" < "juan"');
    checkOperationResult('"123" == 123');
    checkOperationResult('"123" === 123');
    checkOperationResult('parseInt("123") === 123');
}
