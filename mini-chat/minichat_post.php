<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
try {
  $bd = new PDO('mysql:host=localhost;dbname=mini_chat;charset=utf8', 'root', 'mvdtvw28');
} catch(exception $e) {
  die('Erreur: ' . $e->getMessage());
}

$request = $bd->prepare('INSERT INTO miniChat (pseudo,message) VALUES(?,?)');
$request->execute(array($_POST['pseudo'], $_POST['message']));

header('location: minichat.php');
 ?>
