<?php
// vars:
$pageTitle = "Pagina titel van de stratpagina";

include '../../includes/db.php';

$query = $pdo->query('SELECT * FROM reviews ORDER BY date DESC');
$reviews = $query->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($reviews);
?>
