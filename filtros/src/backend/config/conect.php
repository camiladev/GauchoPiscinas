
<?php
$host = 'localhost'
$user = 'u758989242_gaucho';
$pass = '5D>xQthwZGem';
$link = mysql_connect($host, $user, $pass);
if (!$link) {
    die('Não foi possível conectar: ' . mysql_error());
}
echo 'Conexão bem sucedida';
mysql_close($link);
?>


<!-- // Banco de dados
// bd -> u758989242_gaucho-piscina
// user -> u758989242_gaucho
// senha -> 5D>xQthwZGem -->