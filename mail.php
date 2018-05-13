<?php 
require_once('class.phpmailer.php');
include("class.smtp.php");
$mail = new PHPMailer;

$first_name = $_POST['fname'];
$last_name = $_POST['lname'];
$address = $_POST['address'];
$company_name = $_POST['cname'];
$email = $_POST['email'];
$customer_number = $_POST['cnumber'];

$body  = "<html><body><center><table cellspacing='5'cellpadding='5' width='400px' style='border: 5px solid #808185;background-color: #c2c2d6;padding: 10px;'>
    <tr>
        <td>Name:</td><td> <b>$first_name $last_name</b></td>
    </tr>
    <tr>
        <td>Address:</td><td> <b>$address</b></td>
    </tr>
    <tr>
        <td>Company Name:</td><td> <b>$company_name</b></td>
    </tr>
    <tr>
        <td>Email Address:</td><td> <b>$email</b></td>
    </tr>
    <tr>
        <td>Contact Number:</td><td> <b>$customer_number</b></b></td>
    </tr>
</table></center></body></html>";
$mail->IsSMTP(); // telling the class to use SMTP
$mail->SMTPOptions = array(
'ssl' => array(
'verify_peer' => false,
'verify_peer_name' => false,
'allow_self_signed' => true
)
);
$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
                                           // 1 = errors and messages
                                           // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
$mail->Username   = "username";  // GMAIL username
$mail->Password   = "password";            // GMAIL password

$mail->SetFrom('no-replay@domain.com', '<name>');


$mail->Subject    = "<subject>";

$mail->MsgHTML($body);

$address = "<emain address>";
$mail->AddAddress($address, "<Name>");


if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  echo "Message sent!";
}

?>