<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz dane z formularza
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Sprawdź, czy e-mail jest poprawny
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Nieprawidłowy adres e-mail.");
    }

    // Ustawienia e-maila
    $to = "itlight.company@gmail.com";
    $subject = "Zapytanie o wycenę";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Treść wiadomości
    $email_message = "E-mail firmowy: " . $email . "\n";
    $email_message .= "Numer telefonu: " . $phone . "\n";
    $email_message .= "Wiadomość:\n" . $message;

    // Wyślij e-mail
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }
} else {
    echo "Niepoprawny sposób dostępu.";
}
