<?php
require 'vendor/autoload.php';
use GraphQL\Client;
use GraphQL\Query;

function fetchGraphQLData($query) {
    $client = new Client('https://eu-west-2.cdn.hygraph.com/content/cm4y7bf9505ox07w6m85ezalx/master');
    return $client->runQuery($query)->getData();
}
