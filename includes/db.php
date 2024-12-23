<?php
// Controleer het gebruikte domein
$host = $_SERVER['HTTP_HOST'];

// Database-instellingen
if ($host === 'event-photo-site') {
    // Instellingen voor de testserver
    $host = 'localhost';
    $dbname = 'kerssing_snapshowprint';
    $username = 'martijn'; // Pas dit aan naar je MySQL-gebruikersnaam
    $password = 'kerssing'; // Pas dit aan naar je MySQL-wachtwoord
    echo "Verbinding maken met de testserver...\n";
} else {
    // Instellingen voor de liveserver
    $host = 'localhost';
    $dbname = 'njdvuexwzd';
    $username = 'njdvuexwzd'; // Pas dit aan naar je MySQL-gebruikersnaam
    $password = 'pZ479uhzV4'; // Pas dit aan naar je MySQL-wachtwoord
    echo "Verbinding maken met de liveserver...\n";
}

// Maak een databaseverbinding
try {
    $dsn = "mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Verbinding succesvol!";
} catch (PDOException $e) {
    echo "Fout bij het verbinden met de database: " . $e->getMessage();
}


/*
// oude local/test verbinfing

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
    */
?>
