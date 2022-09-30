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
function formSelect(obj) {
    let softplay = document.getElementById('softplay')
    let balloons = document.getElementById('balloons')
    if (obj == 'soft') {
        softplay.style.display = 'block'
        balloons.style.display = 'none'
    } else if (obj == 'balloons') {
        balloons.style.display = 'block'
        softplay.style.display = 'none'
    }
}

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

let name = document.getElementById('')
let email = document.getElementById('')
let phone = document.getElementById('')
let dateEvent = document.getElementById('')
let adress = document.getElementById('')
let typeEvent = document.getElementById('')
let startEvent = document.getElementById('')
let endEvent = document.getElementById('')
let ages = document.getElementById('')
let inOutdoor = document.getElementById('')
let area = document.getElementById('')
let packages = document.getElementById('')
let extras = document.getElementById('')
let ballColor = document.getElementById('')
let ballPit = document.getElementById('')