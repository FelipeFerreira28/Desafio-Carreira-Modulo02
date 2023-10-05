function somar(req, res) {
    const { num1, num2 } = req.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) + Number(num2)}`);
    }

    return res.send("Valores inválidos");
}

function subtrair(req, res) {
    const { num1, num2 } = req.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 - num2}`);
    }

    return res.send("Valores inválidos");
}

function multiplicar(req, res) {
    const { num1, num2 } = req.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 * num2}`);
    }

    return res.send("Valores inválidos");
}

function dividir(req, res) {
    const { num1, num2 } = req.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${num1 / num2}`);
    }

    return res.send("Valores inválidos");
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}