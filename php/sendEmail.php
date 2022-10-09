<?php

/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require '../email/vendor/autoload.php';

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
$packagesColorOutput = $_POST['packagesColors'];
$extrasOutput = $_POST['packagExtras'];

$data[] = [
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
    $ballPit,
    $ballColor,
    $CustomizeIt,
    $additionalDetails,
    $areaOutput,
    $packagesOutput,
    $packagesColorOutput,
    $extrasOutput
];

echo json_encode($data);

// if ($data != "") {
    
    //Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    try {
        //Enable SMTP debugging
        //SMTP::DEBUG_OFF = off (for production use)
        //SMTP::DEBUG_CLIENT = client messages
        //SMTP::DEBUG_SERVER = client and server messages
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;

        //Tell PHPMailer to use SMTP
        $mail->isSMTP();

        //Set the hostname of the mail server
        $mail->Host = 'smtp-relay.gmail.com';
        //Use `$mail->Host = gethostbyname('smtp-relay.gmail.com');`
        //if your network does not support SMTP over IPv6,
        //though this may cause issues with TLS

        //Set the encryption mechanism to use:
        // - SMTPS (implicit TLS on port 465) or
        // - STARTTLS (explicit TLS on port 587)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

        //Set the SMTP port number:
        // - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
        // - 587 for SMTP+STARTTLS
        $mail->Port = 465;


        //Whether to use SMTP authentication
        $mail->SMTPAuth = true;

        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username = '';

        //Password to use for SMTP authentication
        $mail->Password = '';

        //Set who the message is to be sent from
        //Note that with gmail you can only use your account address (same as `Username`)
        //or predefined aliases that you have configured within your account.
        //Do not use user-submitted addresses in here
        $mail->setFrom('danielboscanramos@gmail.com', 'Primera Prueba');

        //Set who the message is to be sent to
        $mail->setMessage = '');

        /* It's telling PHPMailer to send the message as HTML. */
        $mail->isHTML(true);
        //Set the subject line
        $mail->Subject = 'PHPMailer GMail SMTP test';

        $mail->Body = 'Esta es una prueba de <b>PHPMailer</b>';

        $mail->send();
    } catch (Exception $e) {
        echo 'Mensaje ' . $mail->ErrorInfo; 
    }
// }
