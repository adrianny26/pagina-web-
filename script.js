document.addEventListener('DOMContentLoaded', function () {
    // --- Lógica para Números Primos ---
    const runPrimosBtn = document.getElementById('runPrimos');
    runPrimosBtn.addEventListener('click', function () {
        const desde = parseInt(document.getElementById('primosDesde').value);
        const hasta = parseInt(document.getElementById('primosHasta').value);
        const resultadoDiv = document.getElementById('primosResultado');

        if (isNaN(desde) || isNaN(hasta) || desde < 0 || hasta < desde) {
            resultadoDiv.textContent = 'Por favor, ingresa un rango de números válido.';
            resultadoDiv.classList.remove('d-none');
            return;
        }

        function encontrarPrimos(d, h) {
            let primos = [];
            for (let i = d; i <= h; i++) {
                if (i < 2) continue;
                let esPrimo = true;
                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    primos.push(i);
                }
            }
            return primos;
        }

        const primosEncontrados = encontrarPrimos(desde, hasta);
        resultadoDiv.textContent = `Números primos encontrados: ${primosEncontrados.join(', ') || 'Ninguno'}`;
        resultadoDiv.classList.remove('d-none');
    });

    // --- Lógica para Serie Fibonacci ---
    const runFibonacciBtn = document.getElementById('runFibonacci');
    runFibonacciBtn.addEventListener('click', function() {
        const limite = parseInt(document.getElementById('fibonacciLimite').value);
        const resultadoDiv = document.getElementById('fibonacciResultado');

        if (isNaN(limite) || limite < 0) {
            resultadoDiv.textContent = 'Por favor, ingresa un número límite válido (mayor o igual a 0).';
            resultadoDiv.classList.remove('d-none');
            return;
        }

        function generarFibonacci(lim) {
            if (lim === 0) return [0];
            let serie = [0, 1];
            while (serie[serie.length - 1] + serie[serie.length - 2] <= lim) {
                let nuevoNumero = serie[serie.length - 1] + serie[serie.length - 2];
                serie.push(nuevoNumero);
            }
            return serie;
        }

        const serieGenerada = generarFibonacci(limite);
        resultadoDiv.textContent = `Serie Fibonacci: ${serieGenerada.join(', ')}`;
        resultadoDiv.classList.remove('d-none');
    });

    // --- Lógica para Cálculo de IMC ---
    const runIMCBtn = document.getElementById('runIMC');
    runIMCBtn.addEventListener('click', function() {
        const pesoLibras = document.getElementById('imcPeso').value;
        const alturaMetros = document.getElementById('imcAltura').value;
        const resultadoDiv = document.getElementById('imcResultado');

        if (!pesoLibras || !alturaMetros || parseFloat(pesoLibras) <= 0 || parseFloat(alturaMetros) <= 0) {
             resultadoDiv.textContent = 'Por favor, ingresa valores válidos para peso y altura.';
             resultadoDiv.classList.remove('d-none');
             return;
        }
        
        const pesoKg = parseFloat(pesoLibras) / 2.20462;
        const altura = parseFloat(alturaMetros);
        const imc = pesoKg / (altura * altura);
        let categoria = '';

        if (imc < 18.5) categoria = 'Bajo peso';
        else if (imc >= 18.5 && imc < 24.9) categoria = 'Normal';
        else if (imc >= 25 && imc < 29.9) categoria = 'Sobrepeso';
        else categoria = 'Obesidad';
        
        resultadoDiv.textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria}).`;
        resultadoDiv.classList.remove('d-none');
    });

    // --- Lógica para Palabra Palíndroma ---
    const runPalindromoBtn = document.getElementById('runPalindromo');
    runPalindromoBtn.addEventListener('click', function() {
        const palabra = document.getElementById('palindromoPalabra').value;
        const resultadoDiv = document.getElementById('palindromoResultado');

        if (!palabra.trim()) {
            resultadoDiv.textContent = 'Por favor, ingresa una palabra.';
            resultadoDiv.classList.remove('d-none');
            return;
        }

        const palabraLimpia = palabra.toLowerCase().replace(/[\W_]/g, '');
        const palabraInvertida = palabraLimpia.split('').reverse().join('');
        const esPalindromo = palabraLimpia === palabraInvertida;

        if (esPalindromo) {
            resultadoDiv.textContent = `¡"${palabra}" es un palíndromo!`;
        } else {
            resultadoDiv.textContent = `"${palabra}" no es un palíndromo.`;
        }
        resultadoDiv.classList.remove('d-none');
    });
});