<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 23-04-18
 * Time: 05.44
 */

namespace MarketPlace\controller;


use MarketPlace\models\invoice;

class invoiceController
{
  function addInvoice($request, $response){
    invoice::create([
      'status'=>$request->getParam('status'),
      'amount'=>$request->getParam('amount'),
      'payment_method'=>$request->getParam('payment_method'),

    ]);
    return json_encode(invoice::orderBy('id', 'desc')->first());
  }
}
