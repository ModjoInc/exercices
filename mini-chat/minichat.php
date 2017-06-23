<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
//connexion à la BD
try {
  $bd = new PDO('mysql:host=localhost;dbname=mini_chat;charset=utf8', 'root', 'mvdtvw28');
} catch(exception $e) {
  die('Erreur: ' . $e->getMessage());
}

//récupération des derniers messages
$result = $bd->query('SELECT pseudo, message FROM miniChat ORDER BY ID DESC LIMIT 0,10');

//affichage de chaque message
while($donnees = $result->fetch()) {
  echo '<p><strong>' . htmlspecialchars($donnees['pseudo']) . '</strong> :' . htmlspecialchars($donnees['message']) . '</p>';
}

$result->closeCursor();
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form action="minichat_post.php" method="post">
      <label for="pseudo">Pseudo</label> : <input type="text" name="pseudo" id="pseudo">
      <label for="message">Message</label> : <input type="text" name="message" id="message">
      <input type="submit" value="envoyer">
    </form>
  </body>
</html>
