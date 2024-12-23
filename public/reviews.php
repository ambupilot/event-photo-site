<?php

$pageTitle = "Homepagina"; // Titel van de pagina
$pageDescription = "Welkom op onze homepagina met unieke foto-ervaringen."; // Beschrijving van de pagina
$pageKeywords = "foto-ervaringen, bruiloften, feesten, verhuur"; // SEO Keywords
$pageMainImage = "/assets/images/main/home-main.jpg"; // Main image voor social media
$pageUrl = "https://jouwwebsite.nl/index.php"; // Canonical URL
$pageSchemaType = "WebPage"; // Schema.org type

include '../includes/db.php';
include '../includes/header.php';

//$query = $pdo->query('SELECT * FROM reviews ORDER BY date DESC');
$query = $pdo->query('SELECT * FROM reviews ORDER BY RAND()');
$reviews = $query->fetchAll(PDO::FETCH_ASSOC);
?>

<section class="container mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Recensies</h2>
    <?php foreach ($reviews as $review): ?>
        <div class="mb-4">
            <h3 class="text-lg font-semibold"><?= htmlspecialchars($review['name']); ?></h3>
            <p class="text-gray-700"><?= htmlspecialchars($review['comment']); ?></p>
            <!-- <small class="text-gray-500"><?//= date('j F Y', strtotime($review['date'])); ?></small> -->

            <div class="text-yellow-500"><?= str_repeat('★', $review['rating']); ?></div>
        </div>
    <?php endforeach; ?>
    </section>

<?php include '../includes/footer.php'; ?>
