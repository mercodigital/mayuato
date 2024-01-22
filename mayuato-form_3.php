<?PHP

header("Access-Control-Allow-Origin: https://mayuato.netlify.app");
header("Access-Control-Allow-Methods: POST");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try {
        
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';  
        $mail->SMTPAuth   = true;
        $mail->Username   = 'enviadosdemails@gmail.com';    
        $mail->Password   = 'njrj lexu ynqj gjoc';     
        $mail->SMTPSecure = 'tls';               
        $mail->Port       = 587;                 

        $mail->setFrom('enviadosdemails@gmail.com', 'Mailer');
        $mail->addAddress('tortitanegra74@gmail.com', 'Mayuato');     

        $contenidoCorreo = "<b>Nombre:</b> $nombre <br/>" .  
        "<b>Correo electrónico:</b> $correo <br/>" .  
        "<b>Teléfono:</b> $telefono <br/>" . 
        "<b>Mensaje:</b> $mensaje";

        $mail->isHTML(true); 
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Landing page | Formulario 3';
        $mail->Body = $contenidoCorreo;

        $mail->send();
        echo 'Mensaje enviado';
        
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
    }

?>
