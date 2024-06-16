<?php 
$uri = $_SERVER['REQUEST_URI'];

$routes = [
    '/' => 'controllers/controller.php',
    '/article' => 'controllers/controller.php'
];


if (array_key_exists($uri , $routes)){
    require $routes[$uri];
}