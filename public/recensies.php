<?php
include 'includes/header.php';
include 'includes/graphql.php';

$query = <<<GRAPHQL
{
  reviews {
    name
    rating
    comment
  }
}
GRAPHQL;

$reviews = fetchGraphQLData($query);
?>

<section class="py-10">
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-4">Klantrecensies</h2>
        <?php foreach ($reviews as $review): ?>
            <div class="mb-4">
                <h3 class="text-lg font-semibold"><?= $review['name']; ?></h3>
                <p class="text-gray-700"><?= $review['comment']; ?></p>
                <span class="text-yellow-500"><?= str_repeat('★', $review['rating']); ?></span>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
