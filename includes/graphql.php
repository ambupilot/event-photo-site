<?php
require 'vendor/autoload.php';
use GraphQL\Client;
use GraphQL\Query;

function fetchGraphQLData($query) {
    $client = new Client('https://your-graphql-endpoint.com');
    return $client->runQuery($query)->getData();
}
