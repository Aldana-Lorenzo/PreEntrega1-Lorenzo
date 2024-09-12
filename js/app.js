//! Aplicación para calcular el IMC (Índice de Masa Corporal)

function calcular_imc(peso, alturaCms) {
    let alturaMts = alturaCms / 100;
    return peso / (alturaMts * alturaMts);
}

function categorias_imc(imc) {
    if (imc <= 18.5) {
        return 'bajo peso.'
    } else if (imc >= 18.6 && imc <= 24.9) {
        return 'un peso saludable.'
    } else if (imc >= 25 && imc <= 29.9) {
        return 'sobrepeso.'
    } else if (imc >= 30 && imc <= 34.9) {
        return 'obesidad.'
    } else {
        return 'obesidad severa.'
    }
}

function decimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function numero_entero(num) {
    return /^\d+$/.test(num);
}

function resultado_final() {
    alert('Esta es una calculadora para obtener el IMC (Índice de Masa Corporal) \nPara avanzar necesitaremos tu peso y altura.');

    let opciones;

    do {
        opciones = prompt('Ingresa: \n 1. Para CONTINUAR \n 2. Para SALIR');

        if (!numero_entero(opciones) || opciones > 2) {
            alert('Por favor, ingresa una opción válida');
        } else {
            opciones = Number(opciones);

            if (opciones === 1) {
                let peso;

                do {
                    peso = prompt('Por favor ingresa tu peso en kilogramos. Sin puntos ni comas');

                    if (!numero_entero(peso)) {
                        alert('Por favor, ingresa un valor válido');
                    } else {
                        let altura;

                        do {
                            altura = prompt('Por favor, ingresa tu altura en centimetros. Sin puntos ni comas');

                            if (!numero_entero(altura)) {
                                alert('Por favor, ingresa un valor válido');
                            } else {
                                function calculo_imc(peso_imc, altura_imc) {

                                    let imc = calcular_imc(peso_imc, altura_imc);
                                    
                                    let categoria = categorias_imc(imc);

                                    alert(`Tu IMC es de ${decimal(imc)}. Esto indica que tiene ${categoria}`)
                                }
                            }

                            calculo_imc(peso, altura)

                        } while (!numero_entero(altura));
                    }

                } while (!numero_entero(peso));

            } else {
                alert('¡Hasta luego! Gracias por utilizar nuestra app.');
            }
        }

    } while (!numero_entero(opciones) || opciones > 2);
}

resultado_final();