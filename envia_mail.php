<?php
$nome     = $_POST['nome'];
$email    = $_POST['email'];
$mensagem = $_POST['mensagem'];
$planeta = $_POST['planeta'];
$nave = $_POST['nave'];

$corpo  = "Nome: ".$nome."<BR>\n";
$corpo .= "Email: ".$email."<BR>\n";
$corpo .= "Mensagem: ".$mensagem."<BR>\n";
if(mail("seuemail@site.com","Assunto",$corpo)){
  echo("email enviado com sucesso");
} else {
  echo("Erro ao enviar e-mail");
}
?>
