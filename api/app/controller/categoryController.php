<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 23-04-18
 * Time: 05.44
 */

namespace MarketPlace\controller;


use MarketPlace\models\category;

class categoryController extends controller
{
  function addCategory($request, $response){
    category::create([
      'name'=>$request->getParam('name'),
      'description'=>$request->getParam('description'),
    ]);
    return json_encode(category::orderBy('id', 'desc')->first());
  }
}
