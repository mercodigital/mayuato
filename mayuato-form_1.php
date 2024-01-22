<?PHP

header("Access-Control-Allow-Origin: https://mayuato.netlify.app");
header("Access-Control-Allow-Methods: POST");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try {
        
        $mail->isSMTP();
        $mail->Host       = 'smtp.mercodigital.com';  
        $mail->SMTPAuth   = true;
        $mail->Username   = 'soporte@mercodigital.com';    
        $mail->Password   = 'qwkx ypjj tbfv snif';     
        $mail->SMTPSecure = 'tls';               
        $mail->Port       = 587;                 

        $mail->setFrom('soporte@mercodigital.com', 'Mailer');
        $mail->addAddress('tortitanegra74@gmail.com', 'Mayuato');     

        $contenidoCorreo = "<b>Correo electrónico:</b> $correo <br/>" .  
        "<b>Teléfono:</b> $telefono";

        $mail->isHTML(true); 
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Landing page | Formulario 1';
        $mail->Body = $contenidoCorreo;

        $mail->send();
        echo 'Mensaje enviado';
        
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
    }

?>
