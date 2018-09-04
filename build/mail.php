<?php

$recepient = "vpl.petrov@yandex.ru,sergeyskachkov01@gmail.com,olena.sdv@gmail.com";
$sitename = "badboys.dev-team.su";

//$GET_encoded = json_encode($_GET);

$identify = trim($_GET["identify"][0]);
$name = trim($_GET["name"][0]);
$phone = trim($_GET["email"][0]);
$time = trim($_GET["tel"][0]);
$mail = trim($_GET["position"][0]);
$text = trim($_GET["company"][0]);


$message = "  Запрос с сайта  " .  $sitename . ".  $identify \n\nИмя: $name \nТелефон: $tel";
		// if(!empty($mail)){

		// 	$message.="\nE-mail: $mail\n";
		// }
		// if(!empty($time)){

		// 	$message.="\nВремя: $time\n";
		// }
		// if(!empty($city)){

		// 	$message.="\nГород: $city\n";
			
		// }
		// if(!empty($text)){

		// 	$message.="\nВопрос: $text\n";
		// }

//$message .= $GET_encoded;
$pagetitle = "Запроc с сайта \"$sitename\"";

$headers = "Content-type: text/html; charset=UTF-8 \r\n";
    
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

