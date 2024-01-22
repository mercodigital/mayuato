<?PHP

header("Access-Control-Allow-Origin: https://mayuato.netlify.app");
header("Access-Control-Allow-Methods: POST");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
    $cv = $_FILES['cv']['name'];
    $rutaArchivo = $_FILES['cv']['tmp_name'];

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

        $contenidoCorreo = "<b>Correo electrónico:</b> $correo <br/>" .  
        "<b>Mensaje:</b> $mensaje";

        if (!empty($cv) && !empty($rutaArchivo)) {
            $mail->addAttachment($rutaArchivo, $cv);
        }

        $mail->isHTML(true); 
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Landing page | Formulario 2';
        $mail->Body = $contenidoCorreo;

        $mail->send();
        echo 'Mensaje enviado';
        
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
    }

?>
