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

/**
 * If the key pressed is a number or backspace, return true, otherwise return false.
 * @param evt - The event object.
 * @returns a boolean value.
 */
function valideKey(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

/* Checking if the current URL is equal to the URL of the BookNow page or the URL of the reservar page.
If it is, then it will run the function showHours. */
function formSelect(obj) {
    let softplay = document.getElementById('softplay')
    let balloons = document.getElementById('balloons')
    if (obj == 'soft') {
        softplay.style.display = 'block'
        balloons.style.display = 'none'
        showHours(hours, $start);
    } else if (obj == 'balloons') {
        balloons.style.display = 'block'
        softplay.style.display = 'none'
        showHours(hours, $start);
    }
}

function showHours(array, starthour) {
    let elementos = '<option selected disabled>Select time</option>'
    for (let i = 0; i < array.length; i++) {
        elementos += '<option value"' + array[i] + '">' + array[i] + '</option>'
    }
    starthour.innerHTML = elementos;
}

// showHours(hours, $start);

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

function radioChange(e) {
    let custom = document.getElementById('customizeIt-container')
    let ball = document.getElementById('ballColor-container')
    if (e === "Yes") {
        custom.style.display = 'block'
        ball.style.display = 'block'
    } else if (e === "" || e === "No") {
        custom.style.display = 'none'
        ball.style.display = 'none'
    }
}

$(function () {
    $('#datepicker').datepicker();
});

function sendForm() {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let dateEvent = document.getElementById('dateEvent');
    let adress = document.getElementById('adress');
    let typeEvent = document.getElementById('typeEvent');
    let startEvent = document.getElementById('startEvent');
    let endEvent = document.getElementById('endEvent');
    let ages = document.getElementById('ages');
    let inOutdoor = document.getElementById('inOutdoor');
    let ballColor = document.getElementById('ballColor');
    let CustomizeIt = document.getElementById('CustomizeIt');
    let additionalDetails = document.getElementById('additionalDetails');
    let ballPit = document.querySelector('input[name=ballPit]:checked');
    let area = document.querySelectorAll('input[id="area"]:checked');
    let packages = document.querySelectorAll('input[id="package"]:checked');
    let extras = document.querySelectorAll('input[id="extras"]:checked');
    let packageColor = document.querySelectorAll('input[id="packagesColor"]:checked')
    /* Taking the values of the checkboxes and putting them in an array. */
    let areaOutput = [];
    for (let i = 0; i < area.length; i++) {
        areaOutput.push(area[i].defaultValue);
        console.log(areaOutput)
    };
    let packagesOutput = [];
    for (let i = 0; i < packages.length; i++) {
        packagesOutput.push(packages[i].defaultValue);
        console.log(packagesOutput)
    };
    let packagesColorOutput = [];
    for (let i = 0; i < packageColor.length; i++) {
        packagesColorOutput.push(packageColor[i].defaultValue)
        console.log(packagesColorOutput)
    };
    let extrasOutput = [];
    for (let i = 0; i < extras.length; i++) {
        extrasOutput.push(extras[i].defaultValue);
        console.log(extrasOutput)
    };
    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var today = new Date();
    var myDate;
    today.setDate(today.getDate());
    /* Getting the current date and putting it in a variable. */
    myDate = ('0' + (today.getMonth() + 1)).slice(-2) + '/'
        + ('0' + today.getDate()).slice(-2) + '/'
        + today.getFullYear();
    var day = myDate;

    if (name.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please write your name.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (!validEmail.test(email.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'The email you entered is not correct.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })

    } else if (phone.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please write your phone number.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (dateEvent.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Enter date of the event.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (dateEvent.value < day) {
        Swal.fire({
            title: 'Error!',
            text: 'Wrong date! you can not write an overdue date',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (dateEvent.value === day) {
        Swal.fire({
            title: 'Error!',
            text: 'Date error, you cannot book the same day.' + '  ' + 'Please contact us by phone number to assist you',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (adress.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter adress.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (typeEvent.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter the typo of event.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (startEvent.value === "Select time") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter the time of event starts.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (endEvent.value === "" || endEvent.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter the time of event ends.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (ages.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter estimated number of children.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (inOutdoor.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please choose the type of event, indoors or outdoors.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (!ballPit) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select yes or no.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (ballPit.value === "Yes" && ballColor.value === "" && CustomizeIt.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please write in the ball colors.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (ballPit.value === "Yes" && CustomizeIt.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please write in the ball pit field.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (!areaOutput.length) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select installation area.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (!packagesOutput.length) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select packages.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (!packagesColorOutput.length) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select packages colors.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {
        $.ajax({
            url: '../php/sendEmail.php',
            type: 'post',
            dataType: 'json',
            data: {
                name: name.value,
                email: email.value,
                phone: phone.value,
                dateEvent: dateEvent.value,
                adress: adress.value,
                typeEvent: typeEvent.value,
                startEvent: startEvent.value,
                endEvent: endEvent.value,
                ages: ages.value,
                inOutdoor: inOutdoor.value,
                ballPit: ballPit.value,
                ballColor: ballColor.value,
                CustomizeIt: CustomizeIt.value,
                additionalDetails: additionalDetails.value,
                areas: areaOutput,
                package: packagesOutput,
                packagesColors: packagesColorOutput,
                packagExtras: extrasOutput
            }
        }).done(
            function (data) {
                if(data != null){
                    console.log(data)
                    Swal.fire({
                        title: 'Success',
                        text: 'The data has been sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Wrong data.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            }
        );
    }
}