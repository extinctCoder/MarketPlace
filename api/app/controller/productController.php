<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 22-04-18
 * Time: 05.49
 */

namespace MarketPlace\controller;
use MarketPlace\models\product;



class productController extends controller
{
    function listProduct($request, $response){

        return json_encode(product::groupBy('id')->get());
    }

    function addProduct($request, $response){

      product::create([
        'name'=>$request->getParam('pName'),
        'status'=>$request->getParam('productStatus'),
        'act_price'=>$request->getParam('actPrice'),
        'price_type'=>$request->getParam('priceType'),
        'price_rate'=>$request->getParam('priceRate'),
        'vat_type'=>$request->getParam('vatType'),
        'vat_rate'=>$request->getParam('vatRate'),
        'quantity'=>$request->getParam('quantity'),
        'min_quantity'=>$request->getParam('minQuantity'),
        'alert_quantity'=>$request->getParam('alertQuantity'),
        'pic_url'=>$request->getParam('picUrl'),
        'description'=>$request->getParam('pDescription'),
      ]);
      return json_encode(product::orderBy('id', 'desc')->first());
    }
}
