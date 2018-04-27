<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

session_start();

require __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true,
        'db' =>[
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'database' => 'marketplace',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
            'collection' => 'utf8_unicode_ci',
            'prefix' => '',
        ],
    ]
]);

$container = $app->getContainer();

$capsule = new \Illuminate\Database\Capsule\Manager();
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule){
    return $capsule;
};


$container['homeController'] = function ($container){
    return new \MarketPlace\Controller\homeController($container);
};

$container['authController'] = function ($container){
    return new \MarketPlace\Controller\authController($container);
};

$container['productController'] = function ($container){
  return new \MarketPlace\Controller\productController($container);
};

$container['categoryController'] = function ($container){
  return new \MarketPlace\Controller\categoryController($container);
};

$container['invoiceController'] = function ($container){
  return new \MarketPlace\Controller\invoiceController($container);
};
