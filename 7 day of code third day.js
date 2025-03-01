let tecnologiasDeseadas = [];
let tecnologiaIngresadaActual= '';
let area;

while (true) {
    area = prompt('¿Qué camino deseas seguir? 1 para Back-End o 2 para Front-End');
    if (area == '1' || area == '2') {
        break;
    } else {
        alert('Por favor ingresa una de las opciones mencionadas :/');
    }
}

if(area == '1'){
    while (true) {
        let javaOC = prompt('¿Deseas aprender Java o C#? 1 para Java o 2 para C#');
        if (javaOC == '1' || javaOC == '2') {
            break;
        } else {
            alert('Por favor ingresa una de las opciones mencionadas :/');
        }
    }
} else if(area == '2'){
    while (true) {
        let angularOVue = prompt('¿Deseas aprender Angular o Vue? 1 para Angular o 2 para Vue');
        if (angularOVue == '1' || angularOVue == '2') {
            break;
        } else {
            alert('Por favor ingresa una de las opciones mencionadas :/');
        }
    }
}

while (true) {
    let formacion = prompt('¿Deseas seguir formándote en Back-End o Fullstack? 1 para Back-End o 2 para Fullstack');
    if (formacion == '1' || formacion == '2') {
        break;
    } else {
        alert('Por favor ingresa una de las opciones mencionadas :/');
    }
}

while(true){
    tecnologiaIngresadaActual = prompt('¿Hay alguna otra tecnología que te gustaría aprender?);
    if(tecnologiaIngresadaActual){
        tecnologiasDeseadas.push(tecnologiaIngresadaActual);
        alert(`¡Excelente elección! ${tecnologiasDeseadas[tecnologiasDeseadas.length - 1]} es muy interesante.`);
    } else {
        break;
    }
}

alert('¡Te deseo suerte en tu trayecto uwu!');
