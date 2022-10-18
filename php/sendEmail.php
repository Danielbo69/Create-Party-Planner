<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$dateEvent = $_POST['dateEvent'];
$adress = $_POST['adress'];
$typeEvent = $_POST['typeEvent'];
$startEvent = $_POST['startEvent'];
$endEvent = $_POST['endEvent'];
$ages = $_POST['ages'];
$inOutdoor = $_POST['inOutdoor'];
$ballPit = $_POST['ballPit'];
$ballColor = $_POST['ballColor'];
$CustomizeIt = $_POST['CustomizeIt'];
$additionalDetails = $_POST['additionalDetails'];
$areaOutput = $_POST['areas'];
$packagesOutput = $_POST['package'];
$packagesColors = $_POST['packagesColors'];
$extrasOutput = $_POST['packagExtras'];

$mail = "bendonluxury.events@gmail.com";
$message[] = [
    $name,
    $email,
    $phone,
    $dateEvent,
    $adress,
    $typeEvent,
    $startEvent,
    $endEvent,
    $ages,
    $inOutdoor,
    $areaOutput,
    $packagesOutput,
    $packagesColors,
    $extrasOutput,
    $ballPit,
    $ballColor,
    $CustomizeIt,
    $additionalDetails
];

echo json_encode($message);

// if($message != "") {
//         mail('danielboscanramos@hotmail.com', 'Prueba', 'New Event', $message);
//         echo 'se envio el correo';
// }
?>