<?php
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];
$to = 'shubin2k4@vk.com';
$header = 'Обратная связь'

$message = "Электронная почта: $email \nТекст: $text";

$send = mail($to, $header, $message, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
?>
