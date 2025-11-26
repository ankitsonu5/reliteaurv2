<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $city = strip_tags(trim($_POST["city"]));
    $message = strip_tags(trim($_POST["message"]));

    // Check for required fields
    if (empty($name) || empty($phone) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Redirect back with error
        header("Location: contact.html?status=error");
        exit;
    }

    // Recipient email
    $to = "customercare@reliteaur.com";
    
    // Email Subject
    $subject = "New Contact Inquiry from $name";

    // Email Content
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "City: $city\n\n";
    $email_content .= "Message:\n$message\n";

    // Email Headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect back with success
        header("Location: contact.html?status=success");
    } else {
        // Redirect back with failure
        header("Location: contact.html?status=fail");
    }
} else {
    // Not a POST request
    header("Location: contact.html");
}
?>
