<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 22-04-18
 * Time: 05.42
 */

namespace MarketPlace\controller;

use MarketPlace\models\entity;


class authController extends controller
{
    function addEntity($request, $response){

      entity::create([
        'name' => $request->getParam('name'),
        'user_name' => $request->getParam('user_name'),
        'password' => $request->getParam('password'),
        'type' => $request->getParam('type'),
        'email' => $request->getParam('email'),
        'house_no' => $request->getParam('house_no'),
        'road_no' => $request->getParam('road_no'),
        'area' => $request->getParam('area'),
        'city' => $request->getParam('city'),
        'country' => $request->getParam('country'),
        'zip_code' => $request->getParam('zip_code'),
      ]);

      return json_encode(entity::orderBy('id', 'desc')->first());
    }
    function allEntity($request, $response){

    }

    function entityAuthenticate($request, $response){
      $userName = $request->getParam('user_name');
      $password = $request->getParam('password');
      $entity = entity::where('user_name',$userName)->first();
      if (!$entity){
        var_dump('false');
        return null;
      }
      else{
        if ($password == $entity->password) {
          return $this->findEntity($request,$response);
        }
      }
      return null;
    }

    function findEntity($request, $response){
        return json_encode(entity::where('user_name', $request->getParam('user_name'))->first());
    }

}
