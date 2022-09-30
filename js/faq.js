/* Getting the current URL. */
let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question #more')
let answer = document.querySelectorAll('.answer');

for (let i = 0; i < btnDropdown.length; i++) {
    // let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;
    btnDropdown[i].addEventListener('click', () => {
        if (switchc == 0) {
            answer[i].style.display = `block`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<img src="../img/minus.svg" alt="minus">';
            switchc++;

        } else if (switchc == 1) {
            answer[i].style.display = `none`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<img src="../img/plus.svg" alt="plus">';
            switchc--;
        }
    })
}

let ESextras = [
    'Castillo Inflable blanco',
    'Resbalador rosado claro',
    'Resbalador azul claro',
    'Resbalador blanco',
    'Hopper Animal vaca',
    'Hopper Animal jirafa',
    'Hopper Animal conejo',
    'Hopper Animal zorro',
    'Escalador suave',
    'Soft play cilindro',
    'Puente de arcoíris',
    'Carro suave',
    'Bloques suaves 25x25x25cm',
    'Bloques suaves 15x15x15cm',
    'Piscina de pelotas blanca 5x5 ft',
    'Piscina de pelotas blanca y gris 5x5 ft',
    'Piscina de pelotas blanca 4.5x3.2 ft',
    'Piscina de pelotas blanca y gris 4.5x3.2 ft',
    'Piscina redonda 4.5 ft'
];