<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $city = strip_tags(trim($_POST["city"]));
    $message = strip_tags(trim($_POST["message"]));

    // Check for required fields
    if (empty($name) || empty($phone) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=error");
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'mail.reliteaur.com';                   // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'customercare@reliteaur.com';           // SMTP username
        $mail->Password   = 'YOUR_PASSWORD_HERE';                   // SMTP password (UPDATE THIS)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
        $mail->Port       = 465;                                    // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('customercare@reliteaur.com', 'Reliteaur Contact Form');
        $mail->addAddress('customercare@reliteaur.com');            // Add a recipient
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(false);                                       // Set email format to plain text
        $mail->Subject = "New Contact Inquiry from $name";
        
        $email_content = "Name: $name\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Email: $email\n";
        $email_content .= "City: $city\n\n";
        $email_content .= "Message:\n$message\n";
        
        $mail->Body    = $email_content;

        $mail->send();
        header("Location: contact.html?status=success");
    } catch (Exception $e) {
        // Log error if needed: echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        header("Location: contact.html?status=fail");
    }
} else {
    header("Location: contact.html");
}
?>
