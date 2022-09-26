function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

//Símbolo de Carga
window.onload = function () {
    var contenedor = document.getElementById('contenedor_loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

/* Getting the current URL. */
var URLactual = window.location;
console.log(URLactual.pathname);
if (URLactual.pathname == "/screens/FAQ.html" || URLactual.pathname == "ES/screens/preguntas-frecuentes.html") {

    let question = document.querySelectorAll('.question');
    let btnDropdown = document.querySelectorAll('.question #more')
    let answer = document.querySelectorAll('.answer');

    for (let i = 0; i < btnDropdown.length; i++) {
        // let altoParrafo = parrafo[i].clientHeight;
        let switchc = 0;
        btnDropdown[i].addEventListener('click', () => {
            if (switchc == 0) {
                console.log("entre switchc = 0")
                answer[i].style.display = `block`;
                question[i].style.marginBottom = '10px';
                btnDropdown[i].innerHTML = '<img src="../img/minus.svg" alt="minus">';
                switchc++;

            } else if (switchc == 1) {
                console.log("entre switchc = 1")
                answer[i].style.display = `none`;
                question[i].style.marginBottom = '0';
                btnDropdown[i].innerHTML = '<img src="../img/plus.svg" alt="plus">';
                switchc--;
            }
        })
    }
}

let $start = document.getElementById('startEvent')
let $end = document.getElementById('endEvent')

let hours = [
    '7AM',
    '8AM',
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
    '6PM',
    '7PM',
    '8PM',
    '9PM',
];

/* Checking if the current URL is equal to the URL of the BookNow page or the URL of the reservar page.
If it is, then it will run the function showHours. */
if (URLactual.pathname == '/screens/BookNow.html' || URLactual.pathname == '/ES/screens/reservar.html') {
    function showHours(array, starthour) {
        let elementos = '<option selected disabled>Select time</option>'
        for (let i = 0; i < array.length; i++) {
            elementos += '<option value"' + array[i] + '">' + array[i] + '</option>'
        }
        starthour.innerHTML = elementos;

    }
    showHours(hours, $start);
    
    /**
     * It takes an array, a start index, an end index, and a location, and then it cuts the array from the
     * start index to the end index, and then it shows the cut array in the location.
     * @param array - the array of objects
     * @param inicio - the starting point of the array
     * @param fin - the number of items to be displayed
     * @param lugar - is the place where the data will be displayed
     */
    function recortar(array, inicio, fin, lugar) {
        let recortar = array.slice(inicio, fin);
        showHours(recortar, lugar)
    }
    
    /* An event listener that is listening for a change in the select element with the id of startEvent.
    When the event is triggered, it will run the function. */
    $start.addEventListener('change', function () {
        let value = $start.value;
        if (value != '9PM') {
            switch (value) {
                case '7AM':
                    recortar(hours, 1, 16, $end)
                    break
                case '8AM':
                    recortar(hours, 2, 16, $end)
                    break
                case '9AM':
                    recortar(hours, 3, 16, $end)
                    break
                case '10AM':
                    recortar(hours, 4, 16, $end)
                    break
                case '11AM':
                    recortar(hours, 5, 16, $end)
                    break
                case '12PM':
                    recortar(hours, 6, 16, $end)
                    break
                case '1PM':
                    recortar(hours, 7, 16, $end)
                    break
                case '2PM':
                    recortar(hours, 8, 16, $end)
                    break
                case '3PM':
                    recortar(hours, 9, 16, $end)
                    break
                case '4PM':
                    recortar(hours, 10, 16, $end)
                    break
                case '5PM':
                    recortar(hours, 11, 16, $end)
                    break
                case '6PM':
                    recortar(hours, 12, 16, $end)
                    break
                case '7PM':
                    recortar(hours, 13, 16, $end)
                    break
                case '8PM':
                    recortar(hours, 14, 16, $end)
                    break
                case '9PM':
                    recortar(hours, 14, 16, $end)
                    break
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'That´s the event deadline, change the start time.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    })
}
