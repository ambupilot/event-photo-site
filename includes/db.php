<?php
$host = 'localhost';
$dbname = 'kerssing_snapshowprint';
$username = 'martijn'; // Pas dit aan naar je MySQL-gebruikersnaam
$password = 'kerssing'; // Pas dit aan naar je MySQL-wachtwoord

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Databaseverbinding mislukt: " . $e->getMessage());
}
?>
