<?php

$recepient = "sergeyskachkov01@gmail.com";
$sitename = "badboys.dev-team.su";

//$GET_encoded = json_encode($_GET);

$identify = trim($_GET["identify"][0]);
$name = trim($_GET["name"][0]);
$phone = trim($_GET["phone"][0]);
$mail = trim($_GET["mail"][0]);
$text = trim($_GET["txt"][0]);

$message = "  Запрос с сайта  " .  $sitename . ".  $identify \n\nИмя: $name \nТелефон: $phone";
		if(!empty($mail)){

			$message.="\nE-mail: $mail\n";
		}
		if(!empty($txt)){

			$message.="\nДомен: $txt\n";
		}

//$message .= $GET_encoded;
$pagetitle = "Запроc с сайта \"$sitename\"";

$headers = "Content-type: text/html; charset=UTF-8 \r\n";
    
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

