<?php

require "app.php";

$app->get('/','homeController:index')->setName('home');

$app->get('/add_entity','authController:addEntity')->setName('add_entity');
$app->get('/find_entity','authController:findEntity')->setName('find_entity');

$app->get('/authorize','authController:entityAuthenticate')->setName('authorize');

$app->get('/list_product','productController:listProduct')->setName('list_product');
$app->get('/add_product','productController:addProduct')->setName('addProduct');

$app->get('/add_category','categoryController:addCategory')->setName('add_category');

$app->get('/add_invoice','invoiceController:addInvoice')->setName('sdd_invoice');

$app->run();
